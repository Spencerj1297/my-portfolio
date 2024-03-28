export default function Yum() {
    return (
      <main className="min-h-screen p-4 lg:py-24 lg:px-32 flex flex-col gap-16">
        <h1 className="text-9xl text-customGrey">YUM</h1>
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:flex-row gap-4 w-full min-h-96">
        <div className="max-h-96 min-h-96 w-full lg:w-3/6 bg-elegantPink flex justify-center items-center rounded-xl">
          <video
            autoPlay
            playsInline
            loop
            muted
            controls
            className="w-full h-96 object-cover z-10 rounded-xl"
          >
            <source src="/home/yum-video.mp4" type="video/mp4" />
            Sorry, your browser doesn&apost support videos.
          </video>
        </div>
          <div className="flex flex-col justify-center items-center gap-8 min-h-96 w-full lg:w-3/6 p-2">
            <p className="text-2xl text-customGrey">
            Discover Zoee: Your all-in-one coaching platform. Manage your business effortlessly with video meetings, easy payments, and scheduling. Find your ideal coach or connect with clients in our vibrant marketplace. Simplify your coaching journey with Zoee.
            </p>
            <h3 className="text-4xl text-customGrey">Technologies</h3>
            <div className="text-center bg-elegantPink rounded-xl grid grid-cols-2 gap-x-4 p-4">
              <ul className="px-6 text-2xl">
                <li>React.js</li>
                <li>TypeScript</li>
                <li>Tailwind</li>
                <li>Python</li>
                <li>AWS</li>
              </ul>
              <ul className="px-6 text-2xl">
                <li>Cronofy</li>
                <li>Stripe</li>
                <li>Courier</li>
                <li>Retool</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full border-2 border-customGrey"></div>
        <div className="w-full text-4xl text-customGrey lg:p-32">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ipsum sit amet lectus mattis, a facilisis nisi tempor. Nulla facilisi. Integer nec semper lectus. Phasellus hendrerit libero nec ligula vehicula, sed ultrices nulla bibendum. Fusce at felis nec arcu porttitor eleifend. Vestibulum nec magna id ipsum pulvinar vehicula. Vivamus nec mi vestibulum, porta quam at, suscipit velit. Fusce vehicula nisi quis ultricies bibendum.</p>
        </div>
        <h3 className="text-4xl text-elegantPink mt-20">Path of Personal Growth</h3>
        <div className="w-full text-4xl flex flex-col gap-4 bg-customGrey glowing-shadow p-4 rounded-xl">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ipsum sit amet lectus mattis, a facilisis nisi tempor. Nulla facilisi. Integer nec semper lectus. Phasellus hendrerit libero nec ligula vehicula, sed ultrices nulla bibendum. Fusce at felis nec arcu porttitor eleifend. Vestibulum nec magna id ipsum pulvinar vehicula. Vivamus nec mi vestibulum, porta quam at, suscipit velit. Fusce vehicula nisi quis ultricies bibendum.</p>
        </div>
      </main>
    );
  }
  