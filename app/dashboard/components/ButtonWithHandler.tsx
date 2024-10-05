"use client";

import React, { useState } from "react";
import { PlusCircle, Trash2, Edit } from "lucide-react";
import { randomBytes } from "crypto";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface ApiKeyData {
    clientId: string;
    secret: string;
    allowedMethods: string[];
    expirationDate: Date;
    revoked: boolean;
}

const apiKeysDatabase: { [key: string]: ApiKeyData } = {};

// Function to generate a new API key
function generateApiKey(
    clientId: string,
    allowedMethods: string[],
    expirationDays: number
) {
    const secret = randomBytes(32).toString("hex");
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationDays);

    const apiKeyData = {
        clientId,
        secret,
        allowedMethods,
        expirationDate,
        revoked: false,
    };

    apiKeysDatabase[clientId] = apiKeyData;
    return { clientId, secret };
}

const ButtonWithHandler = () => {
    const [apiKeys, setApiKeys] = useState<ApiKeyData[]>([]);
    const [newAllowedMethods, setNewAllowedMethods] = useState("");

    const handleCreateApiKey = () => {
        const clientId = `client-${apiKeys.length + 1}`;
        const allowedMethods = ["GET", "POST"];
        const expirationDays = 30;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const apiKey = generateApiKey(clientId, allowedMethods, expirationDays);
        setApiKeys([...apiKeys, apiKeysDatabase[clientId]]);
    };

    const handleRevokeApiKey = (clientId: string) => {
        if (apiKeysDatabase[clientId]) {
            apiKeysDatabase[clientId].revoked = true;
            setApiKeys(
                apiKeys.map((key) =>
                    key.clientId === clientId ? { ...key, revoked: true } : key
                )
            );
        }
    };

    const handleUpdateApiKeyScope = (clientId: string) => {
        if (apiKeysDatabase[clientId]) {
            apiKeysDatabase[clientId].allowedMethods = newAllowedMethods
                .split(",")
                .map((method) => method.trim());
            setApiKeys(
                apiKeys.map((key) =>
                    key.clientId === clientId
                        ? {
                              ...key,
                              allowedMethods: newAllowedMethods
                                  .split(",")
                                  .map((method) => method.trim()),
                          }
                        : key
                )
            );
        }
    };

    return (
        <div className="container mx-auto p-8">
            <Card>
                <CardHeader>
                    <CardTitle>API Keys</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Client ID</TableHead>
                                <TableHead>Secret</TableHead>
                                <TableHead>Allowed Methods</TableHead>
                                <TableHead>Expiration Date</TableHead>
                                <TableHead>Revoked</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {apiKeys.map((apiKey) => (
                                <TableRow key={apiKey.clientId}>
                                    <TableCell>{apiKey.clientId}</TableCell>
                                    <TableCell>{apiKey.secret}</TableCell>
                                    <TableCell>
                                        {apiKey.allowedMethods.join(", ")}
                                    </TableCell>
                                    <TableCell>
                                        {apiKey.expirationDate.toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>
                                        {apiKey.revoked ? "Yes" : "No"}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex gap-2">
                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                onClick={() =>
                                                    handleRevokeApiKey(
                                                        apiKey.clientId
                                                    )
                                                }
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </Button>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => {
                                                    // You might want to open a modal or similar here to get the new scope from the user
                                                    const newScope = prompt(
                                                        "Enter new allowed methods (comma-separated):",
                                                        apiKey.allowedMethods.join(
                                                            ", "
                                                        )
                                                    );
                                                    if (newScope) {
                                                        setNewAllowedMethods(
                                                            newScope
                                                        );
                                                        handleUpdateApiKeyScope(
                                                            apiKey.clientId
                                                        );
                                                    }
                                                }}
                                            >
                                                <Edit className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button onClick={handleCreateApiKey}>
                        <PlusCircle className="h-5 w-5 mr-2" />
                        Create new secret key
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default ButtonWithHandler;
