export default function DevStuff() {
    return (
      <main className="min-h-screen p-4 lg:p-24 flex flex-col gap-8">
        <h1 className="text-9xl text-customGrey">devStuff</h1>
        <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start lg:flex-row gap-4 w-full min-h-96">
          <div className="min-h-96 w-full lg:w-3/5 bg-elegantPink flex justify-center items-center rounded-xl">
            <h2 className="text-4xl">Future devStuff video</h2>
          </div>
          <div className="flex flex-col gap-8 min-h-96 w-full lg:w-2/5 text-customGrey p-2">
            <p className="text-2xl">
            Discover Zoee: Your all-in-one coaching platform. Manage your business effortlessly with video meetings, easy payments, and scheduling. Find your ideal coach or connect with clients in our vibrant marketplace. Simplify your coaching journey with Zoee.
            </p>
            <h3 className="underline text-4xl">Technologies</h3>
            <div className="grid grid-cols-2 gap-x-4">
              <ul className="list-disc px-6 text-2xl">
                <li>React.js</li>
                <li>TypeScript</li>
                <li>Tailwind</li>
              </ul>
              <ul className="list-disc px-6 text-2xl">
                <li>Stripe</li>
                <li>Figma</li>
                <li>Canva</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full border-2 border-customGrey"></div>
        <div className="w-full text-4xl text-customGrey">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ipsum sit amet lectus mattis, a facilisis nisi tempor. Nulla facilisi. Integer nec semper lectus. Phasellus hendrerit libero nec ligula vehicula, sed ultrices nulla bibendum. Fusce at felis nec arcu porttitor eleifend. Vestibulum nec magna id ipsum pulvinar vehicula. Vivamus nec mi vestibulum, porta quam at, suscipit velit. Fusce vehicula nisi quis ultricies bibendum.</p>
        </div>
        <h3 className="text-4xl text-elegantPink mt-20">Path of Personal Growth</h3>
        <div className="w-full text-4xl flex flex-col gap-4 bg-customGrey shadow-customShadow p-4 rounded-xl">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ipsum sit amet lectus mattis, a facilisis nisi tempor. Nulla facilisi. Integer nec semper lectus. Phasellus hendrerit libero nec ligula vehicula, sed ultrices nulla bibendum. Fusce at felis nec arcu porttitor eleifend. Vestibulum nec magna id ipsum pulvinar vehicula. Vivamus nec mi vestibulum, porta quam at, suscipit velit. Fusce vehicula nisi quis ultricies bibendum.</p>
        </div>
      </main>
    );
  }
  