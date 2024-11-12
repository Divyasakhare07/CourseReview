# Course and Professor Review Website

## Overview

The Course and Professor Review website is a platform where students can review courses and professors, share their experiences, and view insights from other students. This project provides an intuitive interface using HTML, CSS, and JavaScript, with MongoDB as the database for storing and managing reviews.

## Features

- *Home Page*: A welcoming page that includes login and signup functionalities.
- *Reviews Page*: Displays course and professor reviews fetched from the database.
- *Submit Review Page*: A responsive form to add reviews to the database.
- *Data Visualization*: Visual representation of review data by course for better decision-making.
- *Q&A Page*: Common questions answered, serving as a guide for new users.
- *About Us Page*: Information about the team members, their contributions, and the data model used.

## Technology Stack

- *Frontend*: HTML, CSS, JavaScript
- *Database*: Local Storage  (for storing review data)
- *Version Control*: GitHub for collaboration and version management

## Installation

1. Clone the repository from GitHub:
   
   ```bash
    git clone <repository_url>
    ```
    
3. Navigate to the project folder.
4. Open the HTML files in a browser to interact with the static website locally.

## Usage

- *Home Page*: Start by signing up or logging in to explore the full features.
- *Submit Review*: Enter course details and rate professors using the form on this page.
- *Data Analytics*: View charts representing reviews to make informed decisions.
- *About Us*: Learn about our team and view our data model, which includes at least two one-to-many relationships.

## Future Enhancements

This static version will be the foundation for a dynamic site to be hosted on Azure. Planned improvements include fully dynamic CRUD operations and enhanced interactivity.

## Contribution

1. Fork the repository on GitHub.
2. Clone your forked repository and create a new branch for each feature or fix:
    bash
    git clone <your_forked_repo_url>
    git checkout -b <feature-branch>
    
3. Commit changes with clear messages and open a pull request for review.

## Data Model

The data model used in this project includes normalized entities (e.g., Courses and Professors) with one-to-many relationships to structure review data efficiently.

## Acknowledgments

This project is part of ISM 6225 - Application Development for Analytics at the University of South Florida. Special thanks to our instructors and TAs for their support and guidance.
