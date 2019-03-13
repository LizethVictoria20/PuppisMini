import React, { Component } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 300px;
  height: 300px;
  margin-top: 100px;
`;
const Image = styled.img`
  width: 250px;
  height: 250px;
  margin: 10px auto;
  display: block;
  border-radius: 5px;
  object-fit: cover;
`;
const Title = styled.h2`
  text-align: center;
  margin-top: 80px;
  font-size: 50px;
`;

class Photos extends Component {
  render() {
    return (
      <div className="container">
        <Title>Photos</Title>
        <div className="row">
          <div className="col-sm">
            <Card className="card post">
              <div className="card-body">
                <a href="#" className="card-link ">
                  <figure>
                    <Image
                      src="https://instagram.feoh4-2.fna.fbcdn.net/vp/cad45d2151e327e9e9a996454ac46a49/5D245F40/t51.2885-15/e35/50521887_2173858199541234_3525654698604037848_n.jpg?_nc_ht=instagram.feoh4-2.fna.fbcdn.net"
                      alt=""
                    />
                  </figure>

                  <span className="post-overlay">
                    <p>
                      <span className="post-like">♡ 150</span>
                    </p>
                  </span>
                </a>
              </div>
            </Card>
          </div>
          <div class="col-sm">
            {" "}
            <Card className="card post">
              <div className="card-body">
                <a href="#" className="card-link ">
                  <figure>
                    <Image
                      src="https://instagram.feoh4-2.fna.fbcdn.net/vp/4d3f0800aa5095950d6b7f5845840d50/5D191DE5/t51.2885-15/e35/45643783_734780323575509_3152925887313704723_n.jpg?_nc_ht=instagram.feoh4-2.fna.fbcdn.net"
                      alt=""
                    />
                  </figure>

                  <span className="post-overlay">
                    <p>
                      <span className="post-like">♡ 150</span>
                    </p>
                  </span>
                </a>
              </div>
            </Card>
          </div>
          <div class="col-sm">
            {" "}
            <Card className="card post">
              <div className="card-body">
                <a href="#" className="card-link ">
                  <figure>
                    <Image
                      src="https://instagram.feoh4-2.fna.fbcdn.net/vp/cf7f69b73441675555928a962f196f25/5D222DDB/t51.2885-15/e35/46399773_489092914947255_4098630136808346961_n.jpg?_nc_ht=instagram.feoh4-2.fna.fbcdn.net"
                      alt=""
                    />
                  </figure>

                  <span className="post-overlay">
                    <p>
                      <span className="post-like">♡ 150</span>
                    </p>
                  </span>
                </a>
              </div>
            </Card>
          </div>
          <div class="col-sm">
            {" "}
            <Card className="card post">
              <div className="card-body">
                <a href="#" className="card-link ">
                  <figure>
                    <Image
                      src="https://instagram.feoh4-2.fna.fbcdn.net/vp/4f8d5a6950f4ecad561040b775488047/5D253616/t51.2885-15/e35/46390280_345905005988826_6916671185503699581_n.jpg?_nc_ht=instagram.feoh4-2.fna.fbcdn.net"
                      alt=""
                    />
                  </figure>

                  <span className="post-overlay">
                    <p>
                      <span className="post-like">♡ 150</span>
                    </p>
                  </span>
                </a>
              </div>
            </Card>
          </div>
          <div class="col-sm">
            {" "}
            <Card className="card post">
              <div className="card-body">
                <a href="#" className="card-link ">
                  <figure>
                    <Image
                      src="https://instagram.feoh4-2.fna.fbcdn.net/vp/366c60b86994c7aae5d74c5e80f36e65/5D15E9CF/t51.2885-15/e35/42141247_687547578290574_3465667924487737609_n.jpg?_nc_ht=instagram.feoh4-2.fna.fbcdn.net"
                      alt=""
                    />
                  </figure>

                  <span className="post-overlay">
                    <p>
                      <span className="post-like">♡ 150</span>
                    </p>
                  </span>
                </a>
              </div>
            </Card>
          </div>
          <div class="col-sm">
            <Card className="card post">
              <div className="card-body">
                <a href="#" className="card-link ">
                  <figure>
                    <Image
                      src="https://instagram.feoh4-2.fna.fbcdn.net/vp/035924bad247c456cba7ae1874f6641f/5D08CA74/t51.2885-15/e35/47694900_2336874103198666_8524754054977643597_n.jpg?_nc_ht=instagram.feoh4-2.fna.fbcdn.net"
                      alt=""
                    />
                  </figure>

                  <span className="post-overlay">
                    <p>
                      <span className="post-like">♡ 150</span>
                    </p>
                  </span>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Photos;
