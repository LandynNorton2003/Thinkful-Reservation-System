# Restaurant Reservation System
This is a restaurant reservation system that allows customers to create and manage reservations, as well as view the restaurant's availability and seating arrangements. The system is built using Node.js, Express, Knex, and PostgreSQL for the backend, and React and Bootstrap for the frontend.
##  Link: https://thinkful-restaurant-system.vercel.app/dashboard
## Features
- Customers can create new reservations by providing their name, phone number, date, time, and party size.
- Customers can view their existing reservations and edit or cancel them if necessary.
- Restaurant staff can view the reservations for a particular date and time, as well as the seating arrangements for the restaurant.
- Restaurant staff can assign tables to reservations and mark them as finished when the customers have left.
- The system enforces business rules such as not allowing reservations on Tuesdays, not allowing reservations before 10:30 AM or after 9:30 PM, and not allowing reservations for parties larger than the available tables can accommodate.
## Usage
### Creating a Reservation
- Click on the "New Reservation" button on the dashboard.
- Fill out the form with your name, phone number, date, time, and party size.
- Click the "Submit" button to create the reservation.
### Viewing Reservations
- Click on the "Search" button on the dashboard.
- Enter the phone number used to create the reservation.
- Click the "Find" button to view the reservation details.
### Editing a Reservation
- Click on the reservation you wish to edit on the dashboard.
- Click the "Edit" button to modify the reservation details.
- Click the "Submit" button to save the changes.
### Cancelling a Reservation
- Click on the reservation you wish to cancel on the dashboard.
- Click the "Cancel" button to remove the reservation from the system.
### Assigning a Table
- Click on the reservation you wish to assign a table to on the dashboard.
- Select the table from the dropdown menu.
- Click the "Submit" button to save the changes.
### Marking a Reservation as Finished
- Click on the reservation you wish to mark as finished on the dashboard.
- Click the "Finish" button to indicate that the customers have left the table.
