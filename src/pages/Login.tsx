// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { Eye, EyeOff, ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { authAPI } from "@/services/endpoints";

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const urlMessage = new URLSearchParams(location.search).get("message");

//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMsg("");

//     try {
//       const response = await authAPI.login({
//         email: formData.email,
//         password: formData.password,
//       });

//       localStorage.setItem("access", response.data.access);
//       localStorage.setItem("refresh", response.data.refresh);
// // ⭐ After login: handle pending shortlist
// const pending = localStorage.getItem("pendingShortlist");
// if (pending) {
//   const saved = JSON.parse(localStorage.getItem("shortlistedTalents") || "[]");

//   // Avoid duplicates
//   if (!saved.some((t: any) => t.id === pending)) {
//     // You must refetch talent object OR store full object earlier
//     // Best option: store full object before redirecting!
//     const pendingTalent = JSON.parse(localStorage.getItem("pendingShortlistData") || "null");
//     if (pendingTalent) {
//       saved.push(pendingTalent);
//       localStorage.setItem("shortlistedTalents", JSON.stringify(saved));
//     }
//   }

//   // cleanup
//   localStorage.removeItem("pendingShortlist");
//   localStorage.removeItem("pendingShortlistData");
// }

//       try {
//         await authAPI.me();
//       } catch {}

//       navigate("/employer-dashboard");
//     } catch (error: any) {
//       if (error.response?.status === 401) {
//         setErrorMsg("Invalid email or password.");
//       } else {
//         setErrorMsg("Something went wrong. Try again later.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen py-8 flex items-center justify-center">
//       <div className="w-full max-w-md px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           {/* Title */}
//           <div className="text-center mb-8">
//             <h1 className="text-3xl font-cosmic font-bold bg-gradient-nebula bg-clip-text text-transparent mb-2">
//               Welcome Back
//             </h1>
//             <p className="text-muted-foreground">
//               Sign in to your Nebula account
//             </p>
//           </div>

//           {/* 🔔 Message from redirect */}
//           {urlMessage && (
//             <p className="text-yellow-400 text-sm text-center mb-4">
//               {urlMessage}
//             </p>
//           )}

//           {/* 🔥 Login Form */}
//           <Card className="cosmic-card">
//             <CardHeader>
//               <CardTitle className="text-center">Sign In</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <Input
//                   type="email"
//                   placeholder="Email address"
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                   required
//                 />

//                 <div className="relative">
//                   <Input
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Password"
//                     value={formData.password}
//                     onChange={(e) =>
//                       setFormData({ ...formData, password: e.target.value })
//                     }
//                     required
//                   />

//                   <Button
//                     type="button"
//                     variant="ghost"
//                     size="sm"
//                     className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
//                     onClick={() => setShowPassword(!showPassword)}
//                   >
//                     {showPassword ? <EyeOff /> : <Eye />}
//                   </Button>
//                 </div>

//                 {errorMsg && (
//                   <p className="text-red-500 text-sm text-center">{errorMsg}</p>
//                 )}

//                 <Button
//                   type="submit"
//                   variant="cosmic"
//                   className="w-full group"
//                   disabled={loading}
//                 >
//                   {loading ? "Signing in..." : "Sign In as Company"}
//                   {!loading && (
//                     <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
//                   )}
//                 </Button>
//               </form>

//               <div className="mt-6 text-center text-sm">
//                 <p className="text-muted-foreground mb-2">
//                   Don't have an account?
//                 </p>
//                 <Link to="/signup">
//                   <Button variant="cosmic-outline" size="sm">
//                     Register Company
//                   </Button>
//                 </Link>
//               </div>
//             </CardContent>
//           </Card>

//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Login;



import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Eye, EyeOff, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { authAPI } from "@/services/endpoints";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const urlMessage = new URLSearchParams(location.search).get("message");

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const response = await authAPI.login({
        email: formData.email,
        password: formData.password,
      });

      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      
      const pending = localStorage.getItem("pendingShortlist");
      if (pending) {
        const saved = JSON.parse(localStorage.getItem("shortlistedTalents") || "[]");
        const pendingTalent = JSON.parse(localStorage.getItem("pendingShortlistData") || "null");

        if (pendingTalent && !saved.some((t: any) => t.id === pending)) {
          saved.push(pendingTalent);
          localStorage.setItem("shortlistedTalents", JSON.stringify(saved));
        }

        localStorage.removeItem("pendingShortlist");
        localStorage.removeItem("pendingShortlistData");
      }

      try {
        await authAPI.me();
      } catch {}

      navigate("/employer-dashboard");
    } catch (error: any) {
      if (error.response?.status === 401) {
        setErrorMsg(t("invalidCredentials"));
      } else {
        setErrorMsg(t("genericError"));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-8 flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-cosmic font-bold bg-gradient-nebula bg-clip-text text-transparent mb-2">
              {t("welcomeBack")}
            </h1>
            <p className="text-muted-foreground">{t("signInSubtitle")}</p>
          </div>

    
          {urlMessage && (
            <p className="text-yellow-400 text-sm text-center mb-4">{urlMessage}</p>
          )}

          {/* Login Form */}
          <Card className="cosmic-card">
            <CardHeader>
              <CardTitle className="text-center">{t("signIn")}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">

                <Input
                  type="email"
                  placeholder={t("email")}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />

                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder={t("password")}
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    required
                  />

                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </Button>
                </div>

                {errorMsg && (
                  <p className="text-red-500 text-sm text-center">
                    {errorMsg}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="cosmic"
                  className="w-full group"
                  disabled={loading}
                >
                  {loading ? t("signingIn") : t("signInAsCompany")}
                  {!loading && (
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm">
                <p className="text-muted-foreground mb-2">
                  {t("noAccount")}
                </p>
                <Link to="/signup">
                  <Button variant="cosmic-outline" size="sm">
                    {t("registerCompany")}
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
