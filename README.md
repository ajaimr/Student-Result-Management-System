# Student Result Management System

This project is a Student Result Management System built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It facilitates two main functionalities: student login and teacher login. Teachers can upload marks, while students can view their marks by providing their registration number and date of birth.

## Features

- **Student Login**: Students can log in using their registration number and date of birth to view their marks.
- **Teacher Login**: Teachers can log in to upload marks for students.
- **Mark Upload**: Teachers can upload marks for students.
- **Mark Viewing**: Students can view their marks by providing their registration number and date of birth.

## Technologies Used

- **MongoDB**: Database for storing student information and marks.
- **Express.js**: Backend framework for handling HTTP requests.
- **React.js**: Frontend framework for building the user interface.
- **Node.js**: Server-side JavaScript runtime environment.
- **Bootstrap**: For styling the frontend components.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your/repository.git
   ```

2. Install dependencies:

   ```bash
   cd student-result-management-system
   npm install
   ```

3. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the following environment variables:

     ```plaintext
     PORT=3000
     MONGODB_URI=your_mongodb_uri
     JWT_SECRET=your_jwt_secret
     ```

4. Run the application:

   ```bash
   npm start
   ```

## Usage

- **Student**: Navigate to the student login page and enter your registration number and date of birth to view your marks.
- **Teacher**: Navigate to the teacher login page and enter your credentials to upload marks for students.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.


