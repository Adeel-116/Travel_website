import React from 'react'

function AddNewCard() {
  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Add a new Card</h1>
          <button className="text-gray-500 text-xl">&times;</button>
        </div>

        <form className="space-y-4">
          {/* Card Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Card Number
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="4321 4321 4321 4321"
              />
              <img
                src="https://img.icons8.com/color/48/visa.png"
                alt="Visa"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8"
              />
            </div>
          </div>

          {/* Exp Date & CVC */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                Exp. Date
              </label>
              <input
                type="text"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="02/27"
              />
            </div>

            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                CVC
              </label>
              <input
                type="text"
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                placeholder="123"
              />
            </div>
          </div>

          {/* Name on Card */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name on Card
            </label>
            <input
              type="text"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
              placeholder="John Doe"
            />
          </div>

          {/* Country or Region */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country or Region
            </label>
            <select
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
            >
              <option>United States</option>
              <option>Canada</option>
              <option>United Kingdom</option>
              <option>Australia</option>
            </select>
          </div>

          {/* Save for Checkout */}
          <div className="flex items-center mt-4">
            <input
              id="saveInfo"
              type="checkbox"
              className="h-4 w-4 text-green-600 border-gray-300 rounded"
            />
            <label
              htmlFor="saveInfo"
              className="ml-2 block text-sm text-gray-900"
            >
              Securely save my information for 1-click checkout
            </label>
          </div>

          {/* Add Card Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600"
          >
            Add Card
          </button>
        </form>

        {/* Subscription Note */}
        <p className="text-xs text-gray-500 mt-4">
          By confirming your subscription, you allow The Outdoor Inn Crowd
          Limited to charge your card for this payment and future payments in
          accordance with their terms. You can always cancel your subscription.
        </p>
      </div>
    </div>
    </>
  )
}

export default AddNewCard