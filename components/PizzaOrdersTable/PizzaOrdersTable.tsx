"use client";

import React, { useState } from "react";
import { SignOutButton, useUser } from '@clerk/nextjs';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { PizzaOrders } from "@/lib/data";

type SortField = "orderId" | "orderDate";
type SortDirection = "asc" | "desc";

const PizzaOrdersTable = () => {

    const { user, isLoaded, isSignedIn } = useUser();


    const [sortField, setSortField] = useState<SortField>("orderId");
    const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

    const handleSort = (field: SortField) => {
        if (sortField === field) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortField(field);
            setSortDirection("asc");
        }
    };

    const sortedOrders = [...PizzaOrders].sort((a, b) => {
        let aValue: string | number;
        let bValue: string | number;

        if (sortField === "orderId") {
            aValue = a.orderId;
            bValue = b.orderId;
        } else {
            aValue = new Date(a.orderDate).getTime();
            bValue = new Date(b.orderDate).getTime();
        }

        if (sortDirection === "asc") {
            return aValue > bValue ? 1 : -1;
        } else {
            return aValue < bValue ? 1 : -1;
        }
    });

    const getStatusBadgeVariant = (status: string) => {
        switch (status) {
            case "Delivered":
                return "default";
            case "Out for Delivery":
                return "secondary";
            case "Preparing":
                return "outline";
            case "Pending":
                return "destructive";
            case "Cancelled":
                return "destructive";
            default:
                return "outline";
        }
    };

    const SortButton = ({ field, children }: { field: SortField; children: React.ReactNode }) => (
        <Button
            variant="ghost"
            onClick={() => handleSort(field)}
            className="h-auto p-0 font-semibold hover:bg-transparent"
        >
            <div className="flex items-center gap-1">
                {children}
                {sortField === field && (
                    sortDirection === "asc" ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />
                )}
            </div>
        </Button>
    );

    if (!isLoaded) return (
        <div className="flex justify-center items-center h-screen">
            <div className="text-2xl font-sans text-gray-900 animate-pulse">Loading...</div>
        </div>
    );
    if (!isSignedIn) return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="text-2xl font-sans text-red-500 font-semibold">
                You are not signed in
            </div>
        </div>
    );


    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-2xl font-bold text-center font-sans">Hello, {user?.firstName} 👋</CardTitle>
                <div className="bg-red-400 w-fit p-2  justify-end rounded-2xl text-white font-sans cursor-pointer">
                    <SignOutButton />
                </div>
            </CardHeader>
            <CardContent>
                <div className="rounded-md border font-sans">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">
                                    <SortButton field="orderId">Order ID</SortButton>
                                </TableHead>
                                <TableHead>Customer Name</TableHead>
                                <TableHead className="hidden sm:table-cell">Pizza Type</TableHead>
                                <TableHead className="text-center">Qty</TableHead>
                                <TableHead className="hidden md:table-cell">
                                    <SortButton field="orderDate">Order Date</SortButton>
                                </TableHead>
                                <TableHead className="text-center">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sortedOrders.map((order) => (
                                <TableRow key={order.orderId} className="hover:bg-muted/50">
                                    <TableCell className="font-medium">{order.orderId}</TableCell>
                                    <TableCell>
                                        <div className="font-medium">{order.customerName}</div>
                                        <div className="sm:hidden text-sm text-muted-foreground">
                                            {order.pizzaType}
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">{order.pizzaType}</TableCell>
                                    <TableCell className="text-center">{order.quantity}</TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        <div className="text-sm">
                                            {new Date(order.orderDate).toLocaleDateString()}
                                        </div>
                                        <div className="text-xs text-muted-foreground">
                                            {new Date(order.orderDate).toLocaleTimeString([], {
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-center">
                                        <Badge
                                            className={`text-xs ${order.status === 'Delivered'
                                                ? 'bg-green-100 text-green-800'
                                                : order.status === 'Out for Delivery'
                                                    ? 'bg-yellow-300 text-black'
                                                    : order.status === "Preparing" ? 'bg-orange-400' :
                                                        order.status === "Cancelled" ? 'bg-red-400' :

                                                            getStatusBadgeVariant(order.status)
                                                }`}>
                                            {order.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
                <div className="mt-4 text-sm text-muted-foreground text-center">
                    Showing {sortedOrders.length} orders • Click Order ID or Order Date to sort
                </div>
            </CardContent>
        </Card >
    );
};

export default PizzaOrdersTable;
