import { Formik, Form, Field } from 'formik';
import toast, { Toaster } from "react-hot-toast";

const SearchBar = () => {
    const initialValues = {
        query: '',
    };
    const handleSubmit = (values) => {if(values.query === '') {
        toast.error('This field needs to filled!')}
        return
    }
    return (
    <header>
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
    <Form>
    <Field
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
    </Form>
    </Formik>
    <Toaster />
</header>
    )
}

export default SearchBar