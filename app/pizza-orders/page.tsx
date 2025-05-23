"use client"

import React from "react";
import PizzaOrdersTable from "@/components/PizzaOrdersTable/PizzaOrdersTable";
import { motion } from "motion/react"

const PizzaOrders = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="p-10 bg-orange-300"
        >
            <PizzaOrdersTable />
        </motion.div>
    );
};

export default PizzaOrders;