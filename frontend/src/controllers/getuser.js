const getUser = async () => {
    try {
        const response = await axios.get('/api/auth/get-user', { withCredentials: true });
        return response.data
    } catch (error) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.error);
        } else {
            throw new Error('An error occurred');
        }
    }
};

export default getUser