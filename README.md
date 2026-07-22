# Automated CI/CD Deployment Pipeline

## Project Overview

This project demonstrates an Automated Continuous Integration and Continuous Deployment (CI/CD) pipeline using GitHub Actions and AWS EC2.

Whenever code is pushed to the GitHub repository, GitHub Actions automatically deploys the latest version of the website to an AWS EC2 Ubuntu server running Apache.

---

## Technologies Used

- HTML
- CSS
- JavaScript
- Git
- GitHub
- GitHub Actions
- AWS EC2
- Ubuntu Server
- Apache2
- SSH

---

## CI/CD Workflow

Developer
↓

Git Push
↓

GitHub Repository
↓

GitHub Actions Workflow
↓

SSH Connection
↓

AWS EC2 Server
↓

Apache Web Server
↓

Live Website

---

## Project Features

- Automatic Deployment
- Secure SSH Authentication
- GitHub Secrets
- Apache Web Server
- AWS EC2 Hosting
- Version Control using Git
- Continuous Deployment

---

## GitHub Secrets

The following repository secrets are used:

- EC2_HOST
- EC2_USER
- EC2_SSH_KEY

Sensitive information is stored securely inside GitHub Secrets and is never hardcoded in the project.

---

## Deployment Process

1. Developer pushes code to GitHub.
2. GitHub Actions workflow starts automatically.
3. Workflow connects to AWS EC2 using SSH.
4. Latest code is downloaded.
5. Website files are copied to Apache web directory.
6. Apache service is restarted.
7. Updated website becomes live.

---

## Live Server

AWS EC2 Ubuntu Server

Apache2 Web Server

GitHub Actions for Automation

---

## Author

Vedant Kale

Cloud Engineer