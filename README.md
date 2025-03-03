# Project Structure and Functionality

This project is a React application designed to collect and display user data for a resume or CV. It consists of form components for data input and view components for data display.

[Live Preview](https://yskim308cvapp.netlify.app/)

## Project Structure

-   `src/components/formComponents/`: Contains individual form components.
    -   `DetailsForm.tsx`: Collects personal details.
    -   `EducationForm.tsx`: Collects education information.
    -   `JobForm.tsx`: Collects work experience information.
    -   `SkillsForm.tsx`: Collects skills information.
-   `src/components/viewComponents/`: Contains components that display the collected data.
    -   `DetailsView.tsx`: Displays personal details.
    -   `EducationView.tsx`: Displays education information.
    -   `JobView.tsx`: Displays work experience information.
    -   `SkillsView.tsx`: Displays skills information.
-   `src/types.ts`: Contains type definitions for the form data and props.
-   `src/App.tsx`: The main application component that orchestrates data flow between forms and views.
-   `src/assets/`: Contains image assets used in the view components.

## Component Details

### `DetailsForm.tsx`

-   **State:**
    -   `formData`: An object of type `DetailsFormData` containing `name`, `email`, `phone`, and `address` fields.
-   **Functions:**
    -   `handleChange`: Updates the `formData` state when input fields change.
    -   `handleSubmit`: Prevents the default form submission, calls the `onSubmit` prop with the current `formData`, and resets the form state.

### `EducationForm.tsx`

-   **State:**
    -   `formData`: An object of type `EducationFormData` containing `school`, `degree`, `date`, and `location` fields.
-   **Functions:**
    -   `handleChange`: Updates the `formData` state when input fields change.
    -   `handleSubmit`: Prevents the default form submission, formats the `date` field into a locale date string, calls the `onSubmit` prop with the formatted data, and resets the form state.

### `JobForm.tsx`

-   **State:**
    -   `formData`: An object of type `JobFormData` containing `company`, `position`, `start`, `end`, `location`, and `description` fields.
-   **Functions:**
    -   `handleChange`: Updates the `formData` state when input fields or the text area change.
    -   `handleSubmit`: Prevents the default form submission, formats the `start` and `end` date fields into locale date strings, calls the `onSubmit` prop with the formatted data, and resets the form state.

### `SkillsForm.tsx`

-   **State:**
    -   `formData`: An object of type `SkillsFormData` containing `skill` and `description` fields.
-   **Functions:**
    -   `handleChange`: Updates the `formData` state when input fields change.
    -   `handleSubmit`: Prevents the default form submission, calls the `appendSkill` prop (which likely adds the skill to a list in a parent component) with the current `formData`, and resets the form state.

### `DetailsView.tsx`

-   **Props:**
    -   `formData`: An object of type `DetailsFormData` containing personal details.
-   **Functionality:**
    -   Displays the provided personal details (name, email, phone, address) using provided assets.

### `EducationView.tsx`

-   **Props:**
    -   `formData`: An array of `EducationFormData` objects.
    -   `handleEducationDelete`: A function to delete an education entry.
-   **State:**
    -   `hovered`: A boolean state to manage the visibility of the delete button.
-   **Functionality:**
    -   Maps through the `formData` array and displays each education entry.
    -   Provides a delete button that appears on hover and calls `handleEducationDelete` when clicked.

### `JobView.tsx`

-   **Props:**
    -   `formData`: An array of `JobFormData` objects.
    -   `handleJobDelete`: A function to delete a job entry.
-   **State:**
    -   `hovered`: A boolean state to manage the visibility of the delete button.
-   **Functionality:**
    -   Maps through the `formData` array and displays each job entry.
    -   Provides a delete button that appears on hover and calls `handleJobDelete` when clicked.

### `SkillsView.tsx`

-   **Props:**
    -   `data`: An array of `SkillsFormData` objects.
    -   `handleDelete`: A function to delete a skill entry.
-   **State (Skill Component):**
    -   `hover`: A boolean state to manage the visibility of the delete button within each Skill component.
-   **Functionality:**
    -   Maps through the `data` array and displays each skill entry using the `Skill` component.
    -   Each `Skill` component provides a delete button that appears on hover and calls `handleDelete` when clicked.

### `App.tsx`

-   **States:**
    -   `detailsData`: Stores the personal details of type `DetailsFormData`.
    -   `skillsData`: Stores an array of skills of type `SkillsFormData[]`.
    -   `educationData`: Stores an array of education entries of type `EducationFormData[]`.
    -   `jobData`: Stores an array of job entries of type `JobFormData[]`.
-   **Functions:**
    -   `handleDetailsSubmit`: Updates `detailsData` state.
    -   `appendSkill`: Adds a new skill to `skillsData`.
    -   `handleSkillDelete`: Removes a skill from `skillsData`.
    -   `handleEducationSubmit`: Adds a new education entry to `educationData`, formatting the date.
    -   `handleEducationDelete`: Removes an education entry from `educationData`.
    -   `handleJobSubmit`: Adds a new job entry to `jobData`, formatting the start and end dates.
    -   `handleJobDelete`: Removes a job entry from `jobData`.
    -   `dateToString`: Formats a date string into a more readable format.
-   **Functionality:**
    -   Manages the overall application state and data flow.
    -   Passes data and handler functions to form and view components.
    -   Renders the form components on the left and the view components on the right.
    -   Handles data manipulation (adding, deleting, and formatting) for each section of the resume.

## General Notes

-   All forms use the `useState` hook to manage their internal form data.
-   Each form component receives an `onSubmit` prop (or `appendSkill` in the case of `SkillsForm`) which is a function that handles the form submission in a parent component.
-   Date fields are formatted into locale date strings before submission in the `EducationForm` and `JobForm` components.
-   The skills form uses appendSkill as a prop, this indicates it will be appending the skill to a list in a parent component.
-   The `App` component acts as the central data manager, passing state and handler functions to child components.
-   View components display the data and provide delete functionality.
-   Date formatting is performed in the `App` component before data is passed to the view components.
-   Hover states are used to control the visibility of delete buttons in the view components.
-   The `dateToString` function is used to convert dates from the form data into a more readable format for the view.
-   The `src/types.ts` file contains typescript interfaces that define the types of the data being passed between components.
-   The `src/assets` folder contains svg files being used as icons in the view components.
