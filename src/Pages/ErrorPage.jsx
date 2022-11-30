import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <section class="page_404">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 ">
            <div class="col-12  text-center">
              <div class="four_zero_four_bg">
                <h1 class="text-center ">404</h1>

              </div>

              <div class="contant_box_404">
                <h3 class="h2">
                  Adashganga o'xshaysiz
                </h3>

                <p>siz izlayotgan sahifa mavjud emas!</p>

                <Link to='/' class="link_404">Bosh sahifa</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
