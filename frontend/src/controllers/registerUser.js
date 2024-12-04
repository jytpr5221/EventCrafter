
const registerUser = async () => {
    try {
        const response = await axios.post('/api/auth/register-user');
        return response.data
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.error);
        } else {
            throw new Error('An error occurred');
        }
    }
};

export default registerUser