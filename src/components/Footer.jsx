import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-[var(--dark-bg)] text-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold text-white">PickMyCareer</h4>
          <p className="text-sm text-gray-300 mt-2">AI-driven career assessment & report generator.</p>
        </div>
        <div>
          <h5 className="font-semibold text-white">Resources</h5>
          <ul className="mt-3 text-sm space-y-2">
            <li><a href="/mnt/data/madan_gowri_report.pdf" className="hover:underline">Sample Report</a></li>
            <li><a href="#howitworks" className="hover:underline">How it works</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold text-white">Contact</h5>
          <p className="text-sm mt-2">hello@pickmycareer.example</p>
          <p className="text-sm mt-1">+91 8448440543</p>
        </div>
      </div>
      <div className="bg-black/30 text-center py-4 text-xs">© {new Date().getFullYear()} PickMyCareer</div>
    </footer>
  );
}
