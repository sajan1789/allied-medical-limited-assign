# Hospital-managment #

<br>

## Tech Stack


- **Express.js**: Handling server-side logic efficiently.
- **Node.js**: Providing a robust server-side scripting and runtime environment.
- **Bycrypt**: For hashing password
- **JsonWebToken**: To creating dynamic token

<br>


# Project Links 


## ⚫Back-end:

Check out the server: https://long-tan-millipede-veil.cyclic.app/

<br>


# Installation
To set up the project locally, follow these steps:

## Backend:

```bash
https://github.com/sajan1789/allied-medical-limited-assign.git
```

```bash
cd   back-end
```

run command in terminal
```
npm install
```

run project
```
npm run server
```
# ROUTES #
# For signUp 

# Method--Post
```bash
https://long-tan-millipede-veil.cyclic.app/tanents/signUp
```
send the following details in the body
```bash
{
hospital_name:" ",
specialization:",
address:" ",
email:"",
password:" "

}
```
# For login
## method--Post
```bash
https://long-tan-millipede-veil.cyclic.app/tanents/login
```
send the following details in the body
```bash
{
email:"",
password:" "
}
```
# To get all patient details

# method--Get
You Must have logged in
```bash
https://long-tan-millipede-veil.cyclic.app/patient
```
# For adding a new patient

# Method--Post
You Must have logged in
```bash
https://long-tan-millipede-veil.cyclic.app/patient/add
```
send the following details in the body
```bash
{
name:"",
gender:"",
phone:"",
age:"",
addresh:"",
bloodGroup:" ",
medicalHistory:"",
currentStatus:""
}
```
# For deleting patient detail

# Method--Post
You Must have logged in
```bash
https://long-tan-millipede-veil.cyclic.app/patient/delete/patient_id
```
send the following details in the body
```bash
{
patient_id
}
```



