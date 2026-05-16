from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from database import db
from werkzeug.utils import secure_filename
import os
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)

CORS(app)




UPLOAD_FOLDER = "uploads"

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER



app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///clients.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

SENDER_EMAIL = "ravimaitri25@gmail.com"

APP_PASSWORD = "nxdqcrfbtpsssdjw"


def send_email(receiver_email, subject, body):

    try:

        msg = MIMEText(body)

        msg["Subject"] = subject
        msg["From"] = SENDER_EMAIL
        msg["To"] = receiver_email

        server = smtplib.SMTP(
            "smtp.gmail.com",
            587
        )

        server.starttls()

        server.login(
            SENDER_EMAIL,
            APP_PASSWORD
        )

        server.sendmail(
            SENDER_EMAIL,
            receiver_email,
            msg.as_string()
        )

        server.quit()

        print("Email Sent Successfully")

    except Exception as e:

        print("Email Error:", e)


# CLIENT MODEL

class Client(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    full_name = db.Column(db.String(100))

    age = db.Column(db.Integer)

    email = db.Column(db.String(100))

    phone = db.Column(db.String(20))

    height = db.Column(db.Float)

    weight = db.Column(db.Float)

    goal = db.Column(db.String(100))

    training_type = db.Column(db.String(100))

    password = db.Column(db.String(100))

    joining_date = db.Column(db.String(100))


# PROGRESS MODEL

class Progress(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    client_id = db.Column(db.Integer)

    current_weight = db.Column(db.Float)

    notes = db.Column(db.String(300))


# WORKOUT MODEL

class Workout(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    client_id = db.Column(db.Integer)

    workout_text = db.Column(db.String(1000))


# DIET MODEL

class Diet(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    client_id = db.Column(db.Integer)

    diet_text = db.Column(db.String(1000))


# TRANSFORMATION MODEL

class Transformation(db.Model):

    id = db.Column(db.Integer, primary_key=True)

    client_id = db.Column(db.Integer)

    image_name = db.Column(db.String(300))

    # SESSION BOOKING MODEL

class SessionBooking(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    client_name = db.Column(
        db.String(100)
    )

    client_email = db.Column(
        db.String(100)
    )

    booking_date = db.Column(
        db.String(100)
    )

    booking_time = db.Column(
        db.String(100)
    )

    notes = db.Column(
        db.String(500)
    )

    status = db.Column(
        db.String(100),
        default="Pending"
    )

# PAYMENT MODEL

class Payment(db.Model):

    id = db.Column(
        db.Integer,
        primary_key=True
    )

    client_id = db.Column(
        db.Integer
    )

    amount = db.Column(
        db.Float
    )

    payment_date = db.Column(
        db.String(100)
    )

    next_due_date = db.Column(
        db.String(100)
    )

    status = db.Column(
        db.String(100),
        default="Pending"
    )

# CREATE DATABASE

with app.app_context():
    db.create_all()


# HOME ROUTE

@app.route("/")

def home():

    return "Ravi Maitri Transformations Backend Running"


# REGISTER ROUTE

@app.route("/register", methods=["POST"])

def register():

    data = request.json

    new_client = Client(

        full_name=data["full_name"],
        age=data["age"],
        email=data["email"],
        phone=data["phone"],
        height=data["height"],
        weight=data["weight"],
        goal=data["goal"],
        training_type=data["training_type"],
        password=data["password"],
        joining_date=data.get("joining_date", "")

    )

    db.session.add(new_client)

    db.session.commit()

    return jsonify({
        "message": "Client Registered Successfully"
    })


# GET ALL CLIENTS

@app.route("/clients", methods=["GET"])

def get_clients():

    clients = Client.query.all()

    client_list = []

    for client in clients:

        client_list.append({

            "id": client.id,
            "full_name": client.full_name,
            "age": client.age,
            "email": client.email,
            "phone": client.phone,
            "goal": client.goal,
            "training_type": client.training_type,
            "joining_date": client.joining_date

        })

    return jsonify(client_list)


# DELETE CLIENT

@app.route("/delete-client/<int:id>", methods=["DELETE"])

def delete_client(id):

    client = Client.query.get(id)

    if not client:

        return jsonify({
            "message": "Client not found"
        })

    db.session.delete(client)

    db.session.commit()

    return jsonify({
        "message": "Client deleted successfully"
    })


# ADD PROGRESS

@app.route("/add-progress", methods=["POST"])

def add_progress():

    data = request.json

    progress = Progress(

        client_id=data["client_id"],
        current_weight=data["current_weight"],
        notes=data["notes"]

    )

    db.session.add(progress)

    db.session.commit()

    return jsonify({
        "message": "Progress Added"
    })


# GET CLIENT PROGRESS

@app.route("/progress/<int:client_id>", methods=["GET"])

def get_progress(client_id):

    progress_entries = Progress.query.filter_by(
        client_id=client_id
    ).all()

    progress_list = []

    for progress in progress_entries:

        progress_list.append({

            "current_weight": progress.current_weight,
            "notes": progress.notes

        })

    return jsonify(progress_list)


# TRAINER LOGIN

@app.route("/login", methods=["POST"])

def login():

    data = request.json

    email = data["email"]
    password = data["password"]

    if email == "ravimaitri25@gmail.com" and password == "ravimaitri@":

        return jsonify({
            "success": True,
            "message": "Login Successful"
        })

    return jsonify({
        "success": False,
        "message": "Invalid Credentials"
    })


# CLIENT LOGIN

@app.route("/client-login", methods=["POST"])

def client_login():

    data = request.json

    email = data["email"]
    password = data["password"]

    client = Client.query.filter_by(
        email=email,
        password=password
    ).first()

    if client:

        return jsonify({

            "success": True,
            "client_id": client.id,
            "full_name": client.full_name

        })

    return jsonify({

        "success": False,
        "message": "Invalid Credentials"

    })


# GET SINGLE CLIENT DATA

@app.route("/client/<int:id>", methods=["GET"])

def get_client(id):

    client = Client.query.get(id)

    if not client:

        return jsonify({
            "message": "Client not found"
        })

    progress_entries = Progress.query.filter_by(
        client_id=id
    ).all()

    progress_list = []

    for progress in progress_entries:

        progress_list.append({

            "current_weight": progress.current_weight,
            "notes": progress.notes

        })

    workout_entries = Workout.query.filter_by(
        client_id=id
    ).all()

    workout_list = []

    for workout in workout_entries:

        workout_list.append({

            "workout_text": workout.workout_text

        })

    diet_entries = Diet.query.filter_by(
        client_id=id
    ).all()

    diet_list = []

    for diet in diet_entries:

        diet_list.append({

            "diet_text": diet.diet_text

        })

    return jsonify({

        "full_name": client.full_name,
        "goal": client.goal,
        "training_type": client.training_type,
        "joining_date": client.joining_date,
        "progress": progress_list,
        "workouts": workout_list,
        "diets": diet_list

    })


# ADD OR UPDATE WORKOUT PLAN

@app.route("/add-workout", methods=["POST"])

def add_workout():

    data = request.json

    existing_workout = Workout.query.filter_by(
        client_id=data["client_id"]
    ).first()

    if existing_workout:

        existing_workout.workout_text = data["workout_text"]

    else:

        workout = Workout(

            client_id=data["client_id"],
            workout_text=data["workout_text"]

        )

        db.session.add(workout)

    db.session.commit()

    return jsonify({
        "message": "Workout Saved"
    })


# GET WORKOUTS

@app.route("/workouts/<int:client_id>", methods=["GET"])

def get_workouts(client_id):

    workouts = Workout.query.filter_by(
        client_id=client_id
    ).all()

    workout_list = []

    for workout in workouts:

        workout_list.append({

            "workout_text": workout.workout_text

        })

    return jsonify(workout_list)


# ADD OR UPDATE DIET PLAN

@app.route("/add-diet", methods=["POST"])

def add_diet():

    data = request.json

    existing_diet = Diet.query.filter_by(
        client_id=data["client_id"]
    ).first()

    if existing_diet:

        existing_diet.diet_text = data["diet_text"]

    else:

        diet = Diet(

            client_id=data["client_id"],
            diet_text=data["diet_text"]

        )

        db.session.add(diet)

    db.session.commit()

    return jsonify({
        "message": "Diet Saved"
    })


# GET DIETS

@app.route("/diets/<int:client_id>", methods=["GET"])

def get_diets(client_id):

    diets = Diet.query.filter_by(
        client_id=client_id
    ).all()

    diet_list = []

    for diet in diets:

        diet_list.append({

            "diet_text": diet.diet_text

        })

    return jsonify(diet_list)


# UPLOAD TRANSFORMATION IMAGE

@app.route("/upload-transformation", methods=["POST"])

def upload_transformation():

    client_id = request.form["client_id"]

    image = request.files["image"]

    if image:

        filename = secure_filename(image.filename)

        image_path = os.path.join(
            app.config["UPLOAD_FOLDER"],
            filename
        )

        image.save(image_path)

        transformation = Transformation(

            client_id=client_id,
            image_name=filename

        )

        db.session.add(transformation)

        db.session.commit()

        return jsonify({
            "message": "Image Uploaded"
        })

    return jsonify({
        "message": "Upload Failed"
    })


# GET TRANSFORMATION IMAGES

@app.route("/transformations/<int:client_id>", methods=["GET"])

def get_transformations(client_id):

    transformations = Transformation.query.filter_by(
        client_id=client_id
    ).all()

    image_list = []

    for image in transformations:

        image_list.append({

            "image_name": image.image_name

        })

    return jsonify(image_list)


# GET ALL TRANSFORMATIONS

@app.route("/all-transformations", methods=["GET"])

def all_transformations():

    transformations = Transformation.query.all()

    image_list = []

    for image in transformations:

        image_list.append({

            "image_name": image.image_name

        })

    return jsonify(image_list)

# BOOK SESSION

@app.route("/book-session", methods=["POST"])

def book_session():

    data = request.json

    booking = SessionBooking(

        client_name=data["client_name"],
        client_email=data["client_email"],
        booking_date=data["booking_date"],
        booking_time=data["booking_time"],
        notes=data["notes"]

    )

    db.session.add(booking)

    db.session.commit()

    return jsonify({

        "message": "Session Booking Submitted"

    })


    # SEND EMAIL TO TRAINER

    try:

        send_email(

            "ravimaitri25@gmail.com",

            "New Session Booking Request",

            f"""
New session booking received.

Client Name: {data['client_name']}
Client Email: {data['client_email']}

Date: {data['booking_date']}
Time: {data['booking_time']}

Notes:
{data['notes']}

Please login to trainer dashboard to approve/reject.

Ravi Maitri Transformations
"""

        )

    except Exception as e:

        print("Email Error:", e)

    return jsonify({

        "message": "Session Booking Submitted"

    })

# GET BOOKINGS

@app.route("/session-bookings", methods=["GET"])

def get_bookings():

    bookings = SessionBooking.query.all()

    booking_list = []

    for booking in bookings:

        booking_list.append({

            "id": booking.id,
            "client_name": booking.client_name,
            "client_email": booking.client_email,
            "booking_date": booking.booking_date,
            "booking_time": booking.booking_time,
            "notes": booking.notes,
            "status": booking.status

        })

    return jsonify(booking_list)

# APPROVE BOOKING

@app.route("/approve-booking/<int:id>", methods=["PUT"])

def approve_booking(id):

    booking = SessionBooking.query.get(id)

    if not booking:

        return jsonify({
            "message": "Booking not found"
        })

    booking.status = "Approved"

    db.session.commit()

    # SEND EMAIL

    send_email(

        booking.client_email,

        "Session Approved",

        f"""
Hello {booking.client_name},

Your session booking has been approved.

Date: {booking.booking_date}
Time: {booking.booking_time}

Thank you,
Ravi Maitri Transformations
"""

    )

    return jsonify({

        "message": "Booking Approved"

    })

# REJECT BOOKING

@app.route("/reject-booking/<int:id>", methods=["PUT"])

def reject_booking(id):

    booking = SessionBooking.query.get(id)

    if not booking:

        return jsonify({
            "message": "Booking not found"
        })

    booking.status = "Rejected"

    db.session.commit()

    # SEND EMAIL

    send_email(

        booking.client_email,

        "Session Rejected",

        f"""
Hello {booking.client_name},

Unfortunately your session request was rejected.

Please book another available slot.

Thank you,
Ravi Maitri Transformations
"""

    )

    return jsonify({

        "message": "Booking Rejected"

    })

# ADD PAYMENT

@app.route("/add-payment", methods=["POST"])

def add_payment():

    data = request.json

    payment = Payment(

        client_id=data["client_id"],
        amount=data["amount"],
        payment_date=data["payment_date"],
        next_due_date=data["next_due_date"],
        status="Paid"

    )

    db.session.add(payment)

    db.session.commit()

    return jsonify({

        "message": "Payment Added"

    })


# GET CLIENT PAYMENTS

@app.route("/payments/<int:client_id>", methods=["GET"])

def get_payments(client_id):

    payments = Payment.query.filter_by(
        client_id=client_id
    ).all()

    payment_list = []

    for payment in payments:

        payment_list.append({

            "amount": payment.amount,
            "payment_date": payment.payment_date,
            "next_due_date": payment.next_due_date,
            "status": payment.status

        })

    return jsonify(payment_list)

# SERVE UPLOADED IMAGES

@app.route("/uploads/<filename>")

def uploaded_file(filename):

    return send_from_directory(
        app.config["UPLOAD_FOLDER"],
        filename
    )


if __name__ == "__main__":
    app.run(debug=True)