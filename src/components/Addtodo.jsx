import React, { useState } from 'react'

export default function Addtodo({ addtodocall }) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");


    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title and description should not be blank");
        } else {
            addtodocall(title, desc);
        }
        setTitle("");
        setDesc("");

    }

    return (
        <div className="container mt-3">
            <h3 className="text-center">Add Todo</h3>
            <form className="shadow rounded py-3 px-5" onSubmit={submit}>
                <div className="form-group mb-3">
                    <label for="todotitle">Todo Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} aria-describedby="todotitle" placeholder="Enter Title" />

                </div>
                <div className="form-group mb-3">
                    <label for="tododesc">Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" />
                </div>

                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
            </form>
        </div>
    )
}
