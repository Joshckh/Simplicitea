import { Link } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* NavBar */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Simplicitea</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?q=80&w=1286&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="hero bg-base-200 min-h-40vh">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              Embrace the Essence of Pure Tea
            </h1>
            <p className="py-6">
              We believe in the power of simplicity. Our mission is to provide
              tea enthusiasts with a pure, unadulterated tea experience that
              highlights the natural flavors and health benefits of each brew.
            </p>
            <button className="btn btn-primary">Explore Our Selections</button>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="carousel w-full pt-3">
        <div id="item1" className="carousel-item w-full flex justify-center">
          <div className="card bg-base-100 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Sarah J. - Tea Enthusiast</h2>
              <p>
                "Simplicitea has transformed my tea-drinking experience! The
                Green Tea is incredibly fresh and revitalizing, perfect for
                starting my day. The packaging is elegant and eco-friendly,
                which I appreciate as a conscious consumer. I love how they
                focus on simplicity and quality. Highly recommended!"
              </p>
            </div>
          </div>
        </div>
        <div id="item2" className="carousel-item w-full flex justify-center">
          <div className="card bg-base-100 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Michael T. - Avid Tea Drinker</h2>
              <p>
                "I've tried many brands, but Simplicitea stands out with its
                exceptional flavors and beautiful presentation. The Chamomile
                Tea helps me unwind after a long day, and the subtle floral
                notes are simply delightful. Their customer service is
                top-notch, making every purchase a pleasure."
              </p>
            </div>
          </div>
        </div>
        <div id="item3" className="carousel-item w-full flex justify-center">
          <div className="card bg-base-100 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                Emma L. - Health-Conscious Consumer
              </h2>
              <p>
                "Simplicitea's commitment to natural ingredients and sustainable
                practices really resonates with me. The Earl Grey Tea is a daily
                indulgence, with its rich, aromatic profile and elegant
                packaging. It's clear that a lot of thought and care goes into
                each product. I couldn't be happier with my choice!"
              </p>
            </div>
          </div>
        </div>
        <div id="item4" className="carousel-item w-full flex justify-center">
          <div className="card bg-base-100 w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">David K. - Casual Tea Drinker</h2>
              <p>
                "I recently discovered Simplicitea, and I'm so glad I did! The
                Mint Tea is incredibly refreshing, and the minty flavor is just
                right. The website is easy to navigate, and the HERO component
                instantly caught my eye. It's great to find a brand that values
                simplicity and quality as much as I do."
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>

      {/* Top Seller */}
      <div className="hero min-h-40vh">
        <div className="hero-content text-center w-full">
          <div className="w-full px-4">
            <h1 className="text-4xl font-bold mb-4">Best Sellers</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img
                    src=".assets/GreenTea.webp"
                    alt="Tea"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Green Tea</h2>
                  <p>
                    Experience the fresh and revitalizing flavor of our Green
                    Tea.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add To Cart</button>
                  </div>
                </div>
              </div>
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Tea"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Chamomile Tea</h2>
                  <p>
                    Relax and unwind with the soothing taste of our Chamomile
                    Tea.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add To Cart</button>
                  </div>
                </div>
              </div>
              <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Tea"
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Mint Tea</h2>
                  <p>
                    Refresh your senses with the invigorating flavor of our Mint
                    Tea.
                  </p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
