import React from "react";
import { Check, Crown, Shield, Users, Eye, EyeOff, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Payment = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
      <Header />
      
      {/* Hero Section */}
      <main className="mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Lifetime Deal: <span className="text-[#DC2626]">£50</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            List your profile on our site and view other profiles. To see contact information of other members, you need to pay £50.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <button className="bg-[#DC2626] hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg">
              <CreditCard className="w-5 h-5 inline mr-2" />
              Get Lifetime Access - £50
            </button>
          </div>
        </div>
      </main>

      {/* Features Comparison */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Choose Your Plan
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Members */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Members</h3>
                <p className="text-gray-600">Basic access to our platform</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Create and edit your profile</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Upload profile to the website</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">View basic information of other members</span>
                </li>
                <li className="flex items-start gap-3">
                  <EyeOff className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-500">Contact details not visible</span>
                </li>
              </ul>
              
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-900">£0</span>
                <span className="text-gray-600">/ Free</span>
              </div>
            </div>

            {/* Paid Members */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-[#DC2626] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-[#DC2626] text-white px-4 py-1 rounded-full text-sm font-semibold">
                  RECOMMENDED
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-[#DC2626]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Paid Members</h3>
                <p className="text-gray-600">Full access to all features</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Everything in Free plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">View other member's full details</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Access contact information</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Lifetime access</span>
                </li>
              </ul>
              
              <div className="text-center">
                <span className="text-2xl font-bold text-[#DC2626]">£50</span>
                <span className="text-gray-600">/ One-time payment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-[#DC2626]" />
              <h3 className="text-xl font-bold text-gray-900">Important Information</h3>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p>
                The lifetime deal is restricted to a single email address, meaning that once you register, 
                the deal is permanently linked to that address. You will not be able to change your email after registration.
              </p>
              
              <p>
                Furthermore, sharing email addresses to manipulate the system is strictly prohibited. 
                Each email address may only have one profile associated with it.
              </p>
              
              <p>
                To maintain the integrity of our site, we actively monitor profiles for misuse. 
                Creating a profile solely to pass the email address to a friend or family member 
                after using our services to find a partner is prohibited. Any account found engaging 
                in such practices will be permanently banned.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#DC2626] to-red-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Find Your Perfect Match?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of Muslims who have found their life partners through our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#DC2626] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Get Lifetime Access - £50
              </button>
              <Link to="/signup" className="border-2 border-white text-white hover:bg-white hover:text-[#DC2626] px-8 py-3 rounded-lg font-semibold text-lg transition-colors">
                Create Free Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Payment;
