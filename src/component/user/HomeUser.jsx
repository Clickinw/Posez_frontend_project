import React from 'react'

export default function HomeUser() {
    return (
        <fragment>
            <div className="container">
                <div className="margin-bottom-10rem shadow-2xl">
                    <img src="https://sv1.picz.in.th/images/2022/11/14/vMSOIn.png" alt="" />
                </div>
                <div className="col">
                    <div className="flex-col justify-center ">
                        <button type="button" class="btn-CE3434 btn-lg ms-5 me-5 rounded text-white p-5 shadow-xl shadow-gray-300">
                            <div className="circle">
                                <i class="bi bi-box-seam align-itmes-center text-black"></i>
                            </div>
                            
                            รับที่ร้าน</button>
                        <button type="button" class="btn-ED7072 btn-lg ms-5 me-5  rounded text-white p-5 shadow-xl shadow-gray-300 ">
                            <div className="circle">
                                <i class="bi bi-shop align-itmes-center text-black"></i>
                            </div>
                            
                            ทานที่ร้าน</button>
                    </div>    
                </div>
            </div>
                
        </fragment>
    )
}