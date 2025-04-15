import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  },
};

const CompaniesSection = () => {
  const companies = [
    { name: "HUL", logo: "/hul.png" },
    { name: "INDIAN", logo: "/indian.png" },
    { name: "RSPL", logo: "/rspl-logo.jpg" },
    { name: "MOCHA", logo: "/mocha.png" },
    { name: "BlueWorld", logo: "/blue.png" },
    { name: "TATA", logo: "/tata.png" },
    { name: "pinchOfSpiece", logo: "/pinchOfSpice.png" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Trusted by{" "}
            <span className="italic text-red-500">industry leaders</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center items-center gap-10 md:gap-16"
        >
          {companies.map((company, index) => (
            <motion.div
              key={index}
              variants={itemVariant}
              whileHover={{
                scale: [1, 1.2, 1.1], // water-drop bounce
              }}
              transition={{
                duration: 0.3,
                ease: "easeOut",
              }}
              className="rounded-xl p-4 bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-20 md:h-28 w-auto object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CompaniesSection;
