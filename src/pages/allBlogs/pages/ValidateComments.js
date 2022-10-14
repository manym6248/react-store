

const ValidateComments = (data) => {
    const errors = {}
    if (!data.email) {
        errors.email = "ایمیل خود را وارد کنید"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "ایمیل معتبر نیسست"
    } else {
        delete errors.email;
    }
    if (!data.name.trim()) {
        errors.name = 'لطفا اسم خود را وارد کنید'
    } else {
        delete errors.name;
    }
    if (!data.text.trim()) {
        errors.text = 'لطفا کامنت خود را وارد کنید'
    } else {
        delete errors.text;
    }







    return errors
}
export default ValidateComments