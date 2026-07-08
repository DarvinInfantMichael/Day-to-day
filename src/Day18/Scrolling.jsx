import { useRef } from "react"
const Scrolling = () => {

    const navRef=useRef();

    const homeRef=useRef();
    const AboutRef=useRef();
    const ProjectsRef=useRef();
    const ContactRef=useRef();
    const ExeperianceRef=useRef();

    const Scrolling =(ref)=>{

    ref.current.scrollIntoView({
        behavior:"smooth"
    });

    };


  return (
    <div>
        <diV>
            <nav ref={navRef}
            className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
                <div className="flex justify-center gap-6 py-4">
                <button onClick={()=>Scrolling(homeRef)} className="px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Home</button>
                <button onClick={()=>Scrolling(AboutRef)} className="px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300">About</button>
                <button onClick={()=>Scrolling(ProjectsRef)} className="px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Projects</button>
                <button onClick={()=>Scrolling(ContactRef)} className="px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Contact</button>
                <button onClick={()=>Scrolling(ExeperianceRef)} className="px-5 py-2 rounded-lg hover:bg-blue-600 transition duration-300">Exeperiance</button>
                </div>
            </nav>

            <section ref={homeRef}
             className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-indigo-200 px-10 pt-24 rounded-2xl">
                <h1>Home</h1>
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                </h1>
            </section>

             <section ref={AboutRef}
              className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-indigo-200 px-10 pt-24">
                <h1>About</h1>
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                </h1>
            </section>

             <section ref={ProjectsRef}
              className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-indigo-200 px-10 pt-24">
                <h1>Projects</h1>
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                </h1>
            </section>

             <section ref={ContactRef}
              className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-indigo-200 px-10 pt-24">
                <h1>Contact</h1>
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                </h1>
            </section>

             <section ref={ExeperianceRef}
              className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-100 to-indigo-200 px-10 pt-24">
                <h1>Exeperiance</h1>
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus aliquid optio minima? Laboriosam beatae cumque, placeat alias repellat labore amet eum magni rerum molestiae. Alias dolorum eaque distinctio nisi laudantium.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita inventore modi consectetur asperiores ad explicabo eaque doloremque nesciunt cum qui possimus illum vel nobis, sed, saepe placeat aut dolores impedit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore porro accusamus adipisci, eligendi consectetur, architecto laboriosam unde nam tenetur dolore aliquam illum provident. Consectetur officiis et deleniti adipisci mollitia voluptatum.

                </h1>
            </section>

            <button onClick={()=>Scrolling(homeRef)} 
                className="bg-amber-200 rounded-2xl p-6">Go to Top</button>
        </diV>
    </div>
  )
}

export default Scrolling