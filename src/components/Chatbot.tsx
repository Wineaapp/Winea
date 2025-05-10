"use client";

import { useState } from "react";
import Image from "next/image";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  productInfo?: {
    name: string;
    price: string;
    shares: number;
    image: string;
  };
  similarProducts?: Array<{
    id: number;
    image: string;
    name: string;
    price: string;
  }>;
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Voici les infos :",
        isUser: false,
        productInfo: {
          name: "POEDAGAR Montre de luxe pour femme",
          price: "198 GHS",
          shares: 85,
          image:
            "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&q=80",
        },
      };
      setMessages((prev) => [...prev, botMessage]);

      // Add comparison question after product info
      setTimeout(() => {
        const compareMessage: Message = {
          id: (Date.now() + 2).toString(),
          content: "Souhaitez-vous comparer avec d'autres modèles similaires?",
          isUser: false,
        };
        setMessages((prev) => [...prev, compareMessage]);
        setIsTyping(false);
      }, 2000);
    }, 1000);
  };

  const handleUserResponse = (response: string) => {
    // Add user's response
    const userMessage: Message = {
      id: Date.now().toString(),
      content: response,
      isUser: true,
    };
    setMessages((prev) => [...prev, userMessage]);

    // If user says yes, show similar products
    if (response.toLowerCase() === "oui vas y") {
      setTimeout(() => {
        const similarProductsMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: "Produits similaires :",
          isUser: false,
          similarProducts: [
            {
              id: 1,
              image:
                "https://images.unsplash.com/photo-1549972574-8e3e1ed6a347",
              name: "Montre dorée classique",
              price: "169 GHS",
            },
            {
              id: 2,
              image:
                "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
              name: "Montre bordeaux élégante",
              price: "202 GHS",
            },
            {
              id: 3,
              image:
                "https://images.unsplash.com/photo-1539874754764-5a96559165b0",
              name: "Montre verte sophistiquée",
              price: "185 GHS",
            },
          ],
        };
        setMessages((prev) => [...prev, similarProductsMessage]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-150px)] bg-white rounded-lg overflow-hidden">
      <div className="flex-1 overflow-y-auto p-4 space-y-8">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
          >
            {!message.isUser && (
              <div className="h-8 w-8 rounded-full bg-[#7224D1] flex items-center justify-center text-white mr-2">
                🤖
              </div>
            )}
            <div className="flex flex-col gap-2">
              <div
                className={`rounded-2xl px-4 py-2 ${message.isUser ? "bg-gray-100 text-black" : "bg-[#7224D1] text-white"}`}
              >
                {message.content}
              </div>
              {message.productInfo && (
                <div className="bg-white rounded-lg border p-4 max-w-[300px]">
                  <div className="aspect-square relative mb-4">
                    <Image
                      src={message.productInfo.image}
                      alt={message.productInfo.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="font-medium text-sm mb-2">
                    {message.productInfo.name}
                  </h3>
                  <p className="text-lg font-bold mb-2">
                    {message.productInfo.price}
                  </p>
                  <div className="flex items-center gap-1 text-sm text-gray-600 mb-4">
                    🔥 {message.productInfo.shares} partages cette semaine
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 border rounded-full py-2 text-sm hover:bg-gray-50">
                      Voir la fiche
                    </button>
                    <button className="flex-1 border rounded-full py-2 text-sm hover:bg-gray-50">
                      Ajouter a ma boutique
                    </button>
                  </div>
                </div>
              )}
              {message.similarProducts && (
                <div className="flex gap-2 overflow-x-auto py-2">
                  {message.similarProducts.map((product, index) => (
                    <div key={index} className="flex-shrink-0 w-32">
                      <div className="aspect-square relative mb-2">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <p className="text-xs text-gray-600">{product.name}</p>
                      <p className="text-sm font-bold">{product.price}</p>
                    </div>
                  ))}
                  <button className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    →
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="h-8 w-8 rounded-full bg-[#7224D1] flex items-center justify-center text-white mr-2">
              🤖
            </div>
            <div className="flex flex-col gap-2">
              <div className="rounded-2xl px-4 py-2 bg-[#7224D1] text-white">
                <span className="typing-animation">...</span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t">
        <div className="flex gap-2 items-center bg-white rounded-full border px-4 py-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Écrivez votre message..."
            className="flex-1 outline-none text-sm"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                if (
                  messages.length > 0 &&
                  messages[messages.length - 1].content ===
                    "Souhaitez-vous comparer avec d'autres modèles similaires?"
                ) {
                  handleUserResponse(input);
                } else {
                  handleSubmit(e);
                }
                setInput("");
              }
            }}
          />
          <button
            onClick={(e) => {
              if (
                messages.length > 0 &&
                messages[messages.length - 1].content ===
                  "Souhaitez-vous comparer avec d'autres modèles similaires?"
              ) {
                handleUserResponse(input);
              } else {
                handleSubmit(e);
              }
            }}
            className="bg-[#7224D1] text-white px-4 py-2 rounded-full text-sm hover:bg-[#5c1dab]"
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}
