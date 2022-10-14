import { useMutation } from '@apollo/client';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import { SEND_COMMENT } from '../../../graphql/mutation';
import ValidateComments from './ValidateComments';


const CommentBlog = ({ slug }) => {
    const [comments, sendComments] = useState({
        name: "",
        email: "",
        text: ""
    });
    const [errors, setErrors] = useState({})
    const [touched, setTouched] = useState({})



    const touchHandeler = event => {
        setTouched({ ...touched, [event.target.name]: true })

    }
    const onChangeHandeler = e => {
        sendComments({ ...comments, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setErrors(ValidateComments(comments))

    }, [comments, touched])

    const [sendLoading, setSendLoading] = useState(false);
    const [sendComment, { loading, data }] = useMutation(SEND_COMMENT, {
        variables: { name: comments.name, email: comments.email, text: comments.text, slug }
    })


        ;

    const sedHandeler = () => {
        if (!Object.keys(errors).length) {
            sendComment()
            setSendLoading(true)
        } else {
            Swal.fire({
                text: 'لطفا فیلد ها را پر کنید',
                icon: 'error',
                showConfirmButton: false,
                timer: 1500

            })
        }




    };

    if (data && sendLoading) {
        console.log(data);
        Swal.fire({
            text: 'نظرات شما ثبت گردید پس از تایید نمایش داده خواهد شد',
            icon: 'success',
            showConfirmButton: false,
            timer: 3000
        })
        setSendLoading(false);
        setTouched({});
        sendComments({
            name: "",
            email: "",
            text: ""
        });
    }


    return (
        <div className='card border-0 shadow mt-0 p-3 py-3  mb-5'>
            <h2 className='text-end mb-4 me-3'> ثبت نظرات </h2>
            <div className="mb-3 ">
                <input
                    name="name"
                    value={comments.name}
                    onFocus={touchHandeler}
                    onChange={onChangeHandeler}
                    type="email"
                    className={touched.name && errors.name ? "form-control form-control-lg is-invalid" : "form-control form-control-lg "}
                    id="exampleFormControlInput1"
                    placeholder="نام " />
                <div className="invalid-feedback text-end me-3 mt-2">
                    {errors.name}
                </div>

            </div>
            <div className="mb-3">
                <input
                    name='email'
                    value={comments.email}
                    onFocus={touchHandeler}
                    onChange={onChangeHandeler}
                    type="email"
                    className={touched.email && errors.email ? "form-control form-control-lg is-invalid" : "form-control form-control-lg "}
                    id="exampleFormControlInput1"
                    placeholder="ایمیل: name@example.com" />
                <div className="invalid-feedback text-end me-3 mt-2 ">
                    {errors.email}
                </div>
            </div>
            <div className="mb-3">
                <textarea
                    name='text'
                    value={comments.text}
                    onFocus={touchHandeler}
                    onChange={onChangeHandeler}
                    className={touched.text && errors.text ? "form-control form-control-lg is-invalid" : "form-control form-control-lg "}
                    id="exampleFormControlTextarea1"
                    placeholder='نظرات شما :' rows="3"></textarea>
                <div className="invalid-feedback text-end me-3 mt-2">
                    {errors.text}
                </div>
            </div>
            <button onClick={sedHandeler} className='btn  btn-lg' style={{ backgroundColor: "#222831", color: "#fff" }}>
                {loading ?
                    " در حال ارسال ..." :
                    "ارسال"
                }</button>



        </div>
    )
}

export default CommentBlog