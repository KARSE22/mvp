# Research You :microscope:

Research You is an innovative clinical research application that enables users to easily search for and be matched with local research studies they may be eligible for. With a streamlined and user-friendly design, users can quickly and easily find research studies that fit their interests and qualifications. The app allows users to save the research studies to their profile and view them at any time. I hope to add more features in the future, including making it easy for users to contact the research study teams directly, allowing for a more efficient and personalized experience. With this application, users can now easily find and participate in research studies that are right for them.

## Table of Contents

- [Getting Started](#getting-started)
  - [Pre-Installation Requirements](#pre-installation-requirements)
  - [Environment Variables Management](#environment-variables-management)
  - [Installation](#installation)
- [Product Features](#product-features)
  - [Home Page](#home-page)
  - [Login](#login)
  - [Search](#search)
  - [Saved Studies](#saved-studies)
  - [Form](#form)

- [Tech Stack](#tech-stack)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Pre-Installation Requirements

```
Node v16.14.2
NPM v8.5.0
```

## Environment Variables Management

This project uses [dotenv](https://github.com/motdotla/dotenv).

The environment variables needed are inside the .example-env file. Simply copy the file, remove the 'example-' part of the file name and input the required values of your access tokens and port number you wish to use.

## Installation

Installs dependencies
```
npm install
```
Starts server
```
npm run server
```
Compiles code
```
npm run dev
```

## Product Features

### Home Page

> Users are greeted with featured research studies
<img src="assets/Research_HomePage.gif" width="100%"/>

### Login

> Users can login in with either their Google, Facebook, or Github Credentials
<img src="assets/Login.gif" width="100%"/>

### Search

> Users can search for studies based on specified interests by entering a keyword in the search bar, or clicking on a tag

<img src="assets/Search.gif" width="100%"/>
<img src="assets/ChipsClick.gif" width="100%"/>

### Saved Studies

> Users can save studies to their profile for review or access later. They are saved to their account, so upon re-entering the website, their previously saved studies will populate until removed by user.

<img src="assets/SavedStudies.gif" width="100%"/>

> Can add or remove the saved studies

<img src="assets/AddRemove.gif" width="100%"/>

### Form

> Can enter personal Information to check against study eligibility requirements. Please note this is a practice/test application. No HIPAA violations.
<img src="assets/Form.png" width="100%"/>

## Tech Stack

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Axios](https://img.shields.io/badge/-Axios-671ddf?logo=axios&logoColor=black&style=for-the-badge)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white&style=for-the-badge)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Material-UI](https://img.shields.io/badge/-MUI-007FFF?logo=mui&logoColor=white&style=for-the-badge)
![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge)
![Figma](https://img.shields.io/badge/-Figma-B2E7E8?logo=figma&logoColor=black&style=for-the-badge)
