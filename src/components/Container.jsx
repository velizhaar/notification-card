import React from "react"
// import { RiAccountCircleFill } from "react-icons/ri"

export default function Container() {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="account">
          <div className="notification">
            <h1>HI !</h1>
            <h2>Your Account is Verified</h2>
          </div>
          <div className="user">
            {/* <RiAccountCircleFill size="4rem" color="purple" /> */}
            <img src="icons/user.png" alt="user" />
          </div>
        </div>
        <div className="description">
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            quaerat quibusdam tempore temporibus atque dolor nihil veniam quae
            est officiis molestias, doloribus accusantium laborum culpa nobis
            numquam magnam in. Tempora voluptatum ex, natus doloribus dolorem
            esse enim animi quod mollitia nobis impedit, pariatur modi. Aliquam
            ipsa delectus sed optio. Consectetur quisquam consequuntur sed
            suscipit? Provident, adipisci molestiae ab facilis dolorum ratione
            at magnam voluptates numquam eligendi commodi? A tempore tenetur
            quibusdam corrupti repellat. Dolores, molestias. Non, dolores
            dolorem sequi ipsa minus beatae sint quos in veritatis assumenda,
            eaque labore eum repellendus. Provident corrupti soluta sunt sed
            nulla eius deleniti aliquid dignissimos in at necessitatibus culpa
            tempore assumenda, amet perspiciatis earum voluptatibus? Itaque
            numquam molestiae iure maiores.
          </h3>
        </div>
      </div>
    </div>
  )
}
