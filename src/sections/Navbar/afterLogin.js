// import imgSearch from "src/assets/search.svg"
// import imgChat from "src/assets/chat.svg"
import profileDefault from "src/assets/PngItem_786293.png"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"



const AfterLogin = ({ setLogin }) => {
    const navigate = useNavigate()
    const [show, setShow] = useState(false)
    const [dataId, setDataId] = useState("")
    const [data, setData] = useState([])
    useEffect(() => {
        let dataUser = localStorage.getItem('@userLogin')
        if (dataUser !== "undefined") {
            dataUser = JSON.parse(dataUser)
        }
        setDataId(dataUser?.data?.user?.id)
    }, [])
    const getData = () => {
        axios
            .get(`https://permana-coffee.cyclic.app/api/v1/users/${dataId}`)
            .then(res => {
                setData(res.data.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (dataId !== "") {
            getData()
        }
    }, [dataId]);



    const onLogout = () => {
        localStorage.removeItem('@userLogin')
        navigate('/')
    }

    const ShowLogout = () => (
        <form className="flex flex-col absolute bg-white w-[150px] right-[-9px] p-3 top-11 z-20 shadow-lg rounded border">
            <button
                onClick={() => navigate('/profile')}
                className="my-1 text-lg font-medium text-[#4F5665] hover:bg-[#4F5665] hover:text-white py-1 rounded-lg">Profile</button>
            <button className="my-1 text-lg font-medium text-[#4F5665] hover:bg-[#4F5665] hover:text-white py-1 rounded-lg">Setting</button>
            <button
                type="submit"
                onClick={() => onLogout()}
                className="my-1 text-lg font-medium text-[#4F5665] hover:bg-[#4F5665] hover:text-white py-1 rounded-lg">Logout</button>
        </form>
    )

    return (
        <div className="flex justify-end gap-2 relative">
            {/* <img className="cursor-pointer" src={imgSearch} alt="search" />
            <img className="cursor-pointer" src={imgChat} alt="chat" /> */}
            <img src={data?.image_url ? data?.image_url : profileDefault} onClick={() => setShow(!show)} alt="profile" className="rounded-full cursor-pointer" width="33px" height="33px" />
            {show ? (<ShowLogout />) : null}
        </div>
    )
}

export default AfterLogin