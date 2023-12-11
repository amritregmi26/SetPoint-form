
export const validateText = (text) => {
    // Ensure the text is not empty
    return text.trim() !== '';
};

export const validateEmail = (email) => {
    // Ensure the email is in a valid format
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validatePhoneNumber = (phoneNumber) => {
    // Ensure the phone number contains 10 digits
    return /^\d{10}$/.test(phoneNumber);
};

export const validateDate = (date) => {
    // Ensure the date is in the format YYYY-MM-DD
    return /^\d{4}-\d{2}-\d{2}$/.test(date);
};

export const validateSelect = (value) => {
    // Ensure a value is selected
    return value !== '';
};

export const validateCheckbox = (isChecked) => {
    // Ensure the checkbox is checked
    return isChecked;
};

export const validateRadioButton = (selectedValue) => {
    // Ensure a radio button is selected
    return selectedValue !== '';
};

export const validateOption = (value) => {
    // Ensure a value is selected
    return value !== '';
};
