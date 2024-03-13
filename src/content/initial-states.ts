export const authInitialState = {
    message: '',
    errors: {
        email: '',
        password: '',
        credentials: '',
        unknown: '',
    },
};

export const ticketInitialState = {
    message: '',
    errors: {
        type: '',
        priority: '',
        project: '',
        title: '',
        description: '',
        file: '',
        link: '',
        unknown: '',
    },
};

export const recoverInitialState = {
    message: '',
    errors: {
        email: '',
        unknown: '',
    },
};

export const signUpInitialState = {
    message: '',
    errors: {
        email: '',
        password: '',
        confirmPassword: '',
        name: '',
        unknown: '',
    },
};

export const createOrganizationInitialState = {
    message: '',
    errors: {
        id: '',
        name: '',
        unknown: '',
    },
};

export const validateOrganizationInitialState = {
    message: '',
    errors: {
        id: '',
        code: '',
        unknown: '',
    },
};

export const editProjectInitialState = {
    message: '',
    errors: {
        id: '',
        name: '',
        unknown: '',
    },
};
