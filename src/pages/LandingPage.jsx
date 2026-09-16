import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Users, Database } from 'lucide-react';
import heroImg from '../assets/hero_dashboard.jpg';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden font-sans">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/30 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-purple-600/20 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-indigo-300 mb-6 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span>v2.0 is now live</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8">
              Data Driven <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">
                Performance.
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-lg">
              EmpDash brings your employee management into the future. Experience ultra-fast data retrieval, sleek aesthetics, and powerful insights all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/dashboard">
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-black font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2 group">
                  <span>Enter Dashboard</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/employee-form">
                <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm">
                  Add Employee
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10">
              <div>
                <div className="flex items-center space-x-2 text-gray-400 mb-2">
                  <Activity className="w-4 h-4 text-indigo-400" />
                  <span className="text-sm font-medium">Uptime</span>
                </div>
                <div className="text-2xl font-bold">99.9%</div>
              </div>
              <div>
                <div className="flex items-center space-x-2 text-gray-400 mb-2">
                  <Users className="w-4 h-4 text-purple-400" />
                  <span className="text-sm font-medium">Active</span>
                </div>
                <div className="text-2xl font-bold">142k</div>
              </div>
              <div>
                <div className="flex items-center space-x-2 text-gray-400 mb-2">
                  <Database className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium">Latency</span>
                </div>
                <div className="text-2xl font-bold">12ms</div>
              </div>
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-2xl blur-3xl" />
            <div className="relative rounded-2xl border border-white/10 bg-black/50 p-2 backdrop-blur-sm shadow-2xl overflow-hidden group">
              <img 
                src={heroImg} 
                alt="Dashboard Preview" 
                className="rounded-xl w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
              />
              {/* Overlay styling for extra cool factor */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none rounded-2xl" />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default LandingPage;
