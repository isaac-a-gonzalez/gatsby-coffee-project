import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsum
              enim, eligendi omnis facere similique odio veritatis rerum tempora
              totam tenetur impedit aspernatur in, eaque dolores excepturi
              voluptates quidem! Distinctio deserunt asperiores ex veniam fuga
              facilis odit quasi obcaecati blanditiis nostrum. Eligendi
              assumenda corrupti quis quia nulla tenetur numquam ipsum?
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
