import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className="py-12">
      <div className="max-w-[1440px] mx-auto grid gap-12">
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-indigo-600 to-pink-500 text-white p-10">
          {/* wavy background using SVG */}
          <svg
            aria-hidden="true"
            className="absolute -top-10 -right-20 opacity-20"
            width="400"
            height="400"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g transform="translate(300,300)">
              <path
                d="M120,-140C155,-104,173,-52,172.6,-0.2C172.1,51.6,153.1,103.2,118.4,129.2C83.7,155.1,33.3,155.5,-14.9,157.1C-63.1,158.7,-110,161.5,-148.7,139.5C-187.5,117.5,-218.1,70.7,-227.6,21.3C-237.2,-28,-225.6,-78.8,-196.4,-118.3C-167.2,-157.9,-120.5,-185.1,-71.8,-202.1C-23.2,-219.1,27.4,-225.9,76.6,-214.7C125.8,-203.5,174,-174.1,120,-140Z"
                fill="white"
              />
            </g>
          </svg>

          <div className="relative flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                FlowDesk, Simplify your support workflow
              </h1>
              <p className="mt-4 text-lg text-white/90">
                Create, track and resolve tickets with a delightful UI. Built
                for teams who care about speed and clarity.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  to="/auth/login"
                  className="px-5 py-3 bg-white text-indigo-600 rounded font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/auth/signup"
                  className="px-5 py-3 border border-white/40 text-white rounded font-medium"
                >
                  Get Started
                </Link>
              </div>
            </div>

            <div className="w-64 h-64 rounded-full bg-white/20 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-white/30"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="font-semibold">Fast setup</h3>
            <p className="mt-1 text-sm text-indigo-600">
              Start in minutes no servers required.
            </p>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              Create and triage tickets immediately with install-free local
              sessions and sensible defaults. Perfect for prototypes, demos, or
              quick team trials.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="font-semibold">Real-time visibility</h3>
            <p className="mt-1 text-sm text-indigo-600">
              See status at a glance.
            </p>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              Dashboards, filters and clear status labels help teams spot
              blockers and prioritize work faster. Less time hunting, more time
              fixing.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <h3 className="font-semibold">Collaborate seamlessly</h3>
            <p className="mt-1 text-sm text-indigo-600">
              Share context and stay aligned.
            </p>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
              Comments, history and quick assignment reduce back-and-forth.
              Handoffs are clear and fast so your team can keep momentum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
