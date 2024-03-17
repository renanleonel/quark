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
        title: '',
        description: '',
        type: '',
        priority: '',
        project: '',
        status: '',
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
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        organizationName: '',
        organizationCode: '',
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

export const changePasswordInitialState = {
    message: '',
    errors: {
        password: '',
        newPassword: '',
        confirmNewPassword: '',
        unknown: '',
    },
};

export const deactivateAccountInitialState = {
    message: '',
    errors: {
        email: '',
        unknown: '',
    },
};
