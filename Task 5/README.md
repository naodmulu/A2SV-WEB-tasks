# Contact Us Form Component

This is a React component for a "Contact Us" form, designed to collect user information such as name, email, and a message. It uses the `react-hook-form` library for form management and validation.

## Features

- **Form Validation**: Ensures that all fields are filled out correctly before submission.
- **Styled Components**: Custom CSS styles to provide a clean and user-friendly interface.
- **DevTool Integration**: Includes the `@hookform/devtools` for easier debugging and form management during development.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/naodmulu/A2SV-WEB-tasks.git
    ```

2. Navigate to the project directory:
    ```sh
    cd A2SV-WEB-tasks\"Task 5"
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Run the App:
    ```sh
    npm run dev
    ```


## Usage

1. **Form Structure**:
    - The form contains three fields for user input:
        - **Name**: A text input field for entering the user's name.
        - **Email**: An email input field for entering the user's email address.
        - **Message**: A textarea for entering the user's message or inquiry.

    ![Form](assets/before%20submission.png)

2. **Validation**:
    - **Name**: The name field is required and must be filled out by the user.
    - **Email**: The email field is required and must contain a valid email address format.
    - **Message**: The message field is required and must be filled out by the user.

    ![full information](assets/full%20information.png)

3. **Error Handling**:
    - If any of the fields are not filled out correctly, an error message will be displayed under the respective field to guide the user in providing the correct information.

    ![Alt text](assets/Error%20handling.png)

## Dependencies

- `react`
- `react-hook-form`
- `@hookform/devtools`
