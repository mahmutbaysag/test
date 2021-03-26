import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";


const Home = ({ posts }) => (
  <div className="container">
    <Head>
      <title>Mahmut BAYSAĞ</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  <center>
    <img src="/banner.png" width="400"/>
    <div className="topMenu">
      <Link href="#home"><a id="topMenuItem1">Home</a></Link>
      <Link href="#contact"><a id="topMenuItem2">My Career</a></Link>
      <Link href="#projects"><a id="topMenuItem3">projects</a></Link>
      <Link href="#mycareer"><a id="topMenuItem4">Contact</a></Link>
    </div> 
    </center>

    <div id="home"><br/><br/><br/>

    <img src="/profil1.png" id="profilimg" width="350" align="right"/>
    <p> Merhaba ben Mahmut <br/><br/>
      İşin içinde yazılım olunca her dilden proje çıkartmayı hedefliyorum.
      Masaüstü, mobil, web yazılımlarından konsol oyunlarına..... <br/>
     <code> React</code>, <code>Asp.NET</code>, <code>electronJS</code> frameworklerinden <code>Flutter</code> a kadar olabildiğince çok dili deneyimlemeye çalışıyorum.
      Yazılım konusunda deneyimimi artırdıktan sonra sıra Robotik kodlamaya da gelecek.
    </p>
      
    </div>
    <div id="contact"><br/><br/><br/>
      
    </div>
    <div id="projects">
    {posts.map(post => (
      <div className="blog">
        <h2 className="blog-title">
          <Link href={post.slug}>
            <a className="blog-title-link">{post.title}</a>
          </Link>
        </h2>
        <div className="blog-text">
          <ReactMarkdown source={post.details} />
        </div>
        <div className="blog-date">{post.date}</div>
      </div>
    ))}
    </div>
    <div id="mycareer"><br/><br/><br/>
      
    </div>

    <style jsx global>{`
    :root {
      --blue: #007bff;
      --indigo: #6610f2;
      --purple: #6f42c1;
      --pink: #e83e8c;
      --red: #dc3545;
      --orange: #fd7e14;
      --yellow: #ffc107;
      --green: #28a745;
      --teal: #20c997;
      --cyan: #17a2b8;
      --white: #fff;
      --gray: #6c757d;
      --gray-dark: #343a40;
      --primary: #007bff;
      --secondary: #6c757d;
      --success: #28a745;
      --info: #17a2b8;
      --warning: #ffc107;
      --danger: #dc3545;
      --light: #f8f9fa;
      --dark: #343a40;
      --breakpoint-xs: 0;
      --breakpoint-sm: 576px;
      --breakpoint-md: 768px;
      --breakpoint-lg: 992px;
      --breakpoint-xl: 1200px;
      --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    }
      code{
        background-color:indigo;
        padding:0.2rem;
        border-radius:10px;
      }

      body{
        background-color: #333333;
      }
      .container {
        max-width: 1000px;
        width: 100%;
        margin: 3rem auto;
      }
      .topMenu {
        text-transform:uppercase;
        margin:2rem 0 0 0;
        font-family: "Segoe UI";
        font-weight:bold;
        text-decoration:none;
        font-size:20px;
      }
      #topMenuItem1{
        color: purple;
      }
      #topMenuItem2{
        color: yellow;
      }
      #topMenuItem3{
        color:teal;
      }
      #topMenuItem4{
        color:deepskyblue;
      }
      .topMenu>a{
        /*background-color:lightgray;*/
        padding:7px;
        border-radius:4px;
       
        transition-delay:0.1s;
      }
      .topMenu>a:hover{
        text-shadow:0px 0px 30px white;
        position:relative;
        top:+5px;
        transition-delay:0.1s;
      }
      .topMenu>a:active{
        transition-delay:0.1s;
        font-size:15px;
        filter:brightness(200%);
      }
      a{
        text-decoration:none;
        margin:0 2rem 0 0;
      }
      #profilimg{
       margin-right:5rem;
      }
      #home>p{
        color:white;
        font-size:3rem;
        font-family:"Segoe UI";
        background-color:gray;
        padding:5px;
        border-radius:10px;
      }
      
    `}</style>
  </div>
);

Home.getInitialProps = async ({ req }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch("http://localhost:3000/api/posts");
  const json = await res.json();
  return { posts: json.posts };
};

export default Home;
