import React from 'react';

export default function AuthForm({ type = 'signup', onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="text-sm block mb-1">Full name</label>
        <input name="name" className="w-full p-3 rounded bg-white/5" placeholder="Your name" />
      </div>
      <div>
        <label className="text-sm block mb-1">Email</label>
        <input name="email" className="w-full p-3 rounded bg-white/5" placeholder="Email" />
      </div>
      <div>
        <label className="text-sm block mb-1">Phone (optional)</label>
        <input name="phone" className="w-full p-3 rounded bg-white/5" placeholder="Phone" />
      </div>

      <div>
        <label className="text-sm block mb-1">Password</label>
        <input name="password" type="password" className="w-full p-3 rounded bg-white/5" placeholder="Password" />
      </div>

      {type === 'signup' && <>
        <div>
          <label className="text-sm block mb-1">Confirm password</label>
          <input name="confirm" type="password" className="w-full p-3 rounded bg-white/5" placeholder="Confirm password" />
        </div>
      </>}

      <button type="submit" className="w-full py-3 rounded bg-accent text-[var(--dark-bg)] font-semibold">
        {type === 'signup' ? 'Create account' : 'Sign in'}
      </button>
    </form>
  );
}
