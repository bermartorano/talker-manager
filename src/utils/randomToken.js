const tokenGenerator = (size) => {
    const base = 'abcdefghijklmnopqrstuvwxyz123456789';
    let result = '';
    for (let index = 0; index < size; index += 1) {
        result += base.charAt(Math.floor(Math.random() * base.length));
    }
    return result;
};

module.exports = tokenGenerator;
