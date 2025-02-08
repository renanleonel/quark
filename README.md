# Quark

[Project under development]

This project aims to provide a simple platform to create and manage tickets for applications.

### Features

#### Authentication

- It should be able to authenticate using email and password.
- It should be able to authenticate using Google account.
- It should be able to recover password using email.
- It should be able to create a new account (email, name, password).

#### Organizations

- It should be able to create a new organization while creating an account.
- It should be able to enter an organization using the organizations invite code while creating an account.
- It should be able to invite a user to an organization.
- It should be able to update the organization name.
- It should be able to delete the organization.

#### User

- It should be able to update the user name.
- It should be able to change the user password.
- It should be able to update the user profile picture.
- It should be able to delete the user account.
- It should be able to set the default language for the user (english, portuguese).

#### Tickets

- It should be able to create a new ticket.
- It should be able to edit a ticket.
- It should be able to update a ticket status (open, in progress, closed).
- It should be able to delete a ticket.
- It should be able to list all tickets from an organization.
- It should be able to filter tickets by name, status, project and priority.
- It should be able to list the amount of tickets per month.

#### Projects

- It should be able to create a new project.
- It should be able to edit a project.
- It should be able to delete a project.
- It should be able to list the projects with more open tickets.
- It should be able to list the projects with more closed tickets.

#### Members

- It should be able to list all members from an organization.
- It should be able to remove a member from an organization.
- It should be able to change the member role in an organization.

### RBAC

Roles and permissions are defined as follows:

- **Admin**: Admin-level access to all resources.
- **Developer**: Can view, create and manage tickets.
- **Member**: Can view and create tickets.
- **Guest**: Can create an account.

#### Permissions table

|                             | Admin | Developer | Member | Guest |
| --------------------------- | ----- | --------- | ------ | ----- |
| Create ticket               | ✅    | ✅        | ✅     | ❌    |
| Edit ticket                 | ✅    | ⚠️        | ⚠️     | ❌    |
| Delete ticket               | ✅    | ⚠️        | ⚠️     | ❌    |
| Update ticket status        | ✅    | ✅        | ❌     | ❌    |
| List all tickets            | ✅    | ✅        | ✅     | ❌    |
| Create new organization     | ✅    | ✅        | ✅     | ❌    |
| Enter new organization      | ✅    | ✅        | ✅     | ❌    |
| Invite user to organization | ✅    | ❌        | ❌     | ❌    |
| Update/delete organization  | ✅    | ❌        | ❌     | ❌    |
| Create new project          | ✅    | ❌        | ❌     | ❌    |
| Edit project                | ✅    | ❌        | ❌     | ❌    |
| Delete project              | ✅    | ❌        | ❌     | ❌    |
| List projects' statistics   | ✅    | ✅        | ✅     | ❌    |
| List members                | ✅    | ✅        | ✅     | ❌    |
| Remove member               | ✅    | ❌        | ❌     | ❌    |
| Change member role          | ✅    | ❌        | ❌     | ❌    |

✅ - Allowed
⚠️ - Allowed with restrictions
❌ - Not allowed

Conditions for the permissions marked with ⚠️:

- **Edit ticket**: Can only edit tickets created by the user.
- **Delete ticket**: Can only delete tickets created by the user.
