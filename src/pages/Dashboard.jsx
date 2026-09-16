import { useState, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Hash, User, Loader2, Phone, Globe, MapPin, Building, X } from 'lucide-react';
import { EmployeeContext } from '../context/EmployeeContext';

const Dashboard = () => {
  const { employees, loading } = useContext(EmployeeContext);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedEmployee) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedEmployee]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex justify-center items-center">
        <Loader2 className="w-12 h-12 text-indigo-500 animate-spin" />
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-12 px-4 sm:px-6 lg:px-8 text-white relative">
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-2">
            Team Directory
          </h1>
          <p className="text-gray-400">Manage and view all your active employees.</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          {employees.map((employee) => (
            <motion.div 
              key={employee.id} 
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedEmployee(employee)}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-xl font-bold shadow-lg">
                    {employee.name.charAt(0)}
                  </div>
                  <div className="flex items-center space-x-1 px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-gray-300">
                    <Hash className="w-3 h-3" />
                    <span>{employee.id.toString().padStart(3, '0')}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-1 group-hover:text-indigo-300 transition-colors">
                  {employee.name}
                </h3>
                
                <div className="space-y-3 mt-6">
                  <div className="flex items-center text-sm text-gray-400">
                    <Mail className="w-4 h-4 mr-3 text-gray-500" />
                    <span className="truncate">{employee.email}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <User className="w-4 h-4 mr-3 text-gray-500" />
                    <span>@{employee.username}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedEmployee && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEmployee(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center px-4"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#111111] border border-white/10 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl overflow-hidden"
              >
                {/* Modal Ambient Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />
                
                <button 
                  onClick={() => setSelectedEmployee(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>

                <div className="flex items-center space-x-6 mb-8 relative z-10">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-3xl font-bold shadow-lg">
                    {selectedEmployee.name.charAt(0)}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-1">{selectedEmployee.name}</h2>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300">
                      @{selectedEmployee.username}
                    </span>
                  </div>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                      <Mail className="w-5 h-5 text-indigo-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Email</p>
                        <p className="text-gray-200">{selectedEmployee.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                      <Phone className="w-5 h-5 text-indigo-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Phone</p>
                        <p className="text-gray-200">{selectedEmployee.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                      <Building className="w-5 h-5 text-indigo-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Company</p>
                        <p className="text-gray-200 font-medium">{selectedEmployee.company.name}</p>
                        <p className="text-sm text-gray-400 mt-1 italic">"{selectedEmployee.company.catchPhrase}"</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                      <MapPin className="w-5 h-5 text-indigo-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Address</p>
                        <p className="text-gray-200">
                          {selectedEmployee.address.suite} {selectedEmployee.address.street}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {selectedEmployee.address.city}, {selectedEmployee.address.zipcode}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/5">
                      <Globe className="w-5 h-5 text-indigo-400 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Website</p>
                        <a href={`https://${selectedEmployee.website}`} target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-indigo-200 transition-colors">
                          {selectedEmployee.website}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Dashboard;
