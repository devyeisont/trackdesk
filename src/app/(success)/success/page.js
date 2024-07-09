import Head from 'next/head';

function Success() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Pago Exitoso</title>
      </Head>
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <div className="text-center">
          <svg
            className="mx-auto h-16 w-16 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2l4-4m0 10a9 9 0 110-18 9 9 0 010 18z"
            />
          </svg>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            ¡Pago Exitoso!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Gracias por tu compra. Hemos recibido tu pago con éxito.
          </p>
          <div className="mt-6">
            <a
              href="/"
              className="text-indigo-600 hover:text-indigo-900 font-medium"
            >
              Volver al inicio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Success;
