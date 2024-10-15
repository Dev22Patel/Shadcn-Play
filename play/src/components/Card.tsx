import React, { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CalendarDays, Heart, MessageCircle, Share2, ArrowRight, ArrowUp, Ghost } from "lucide-react"

const StaticCard = ({
  title = "Exploring Nature's Wonders",
  description = "A journey through untamed wilderness",
  author = "Jane Doe",
  date = "May 15, 2024",
  readTime = "5 min read"
}) => {
  const [read,setRead] = useState(false);
  const handleRead = () => {
    setRead(!read);
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="overflow-hidden shadow-2xl mt-3">
        <div className="relative h-64 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Nature landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <Badge variant="secondary" className="mb-2 bg-white/20 text-white backdrop-blur-sm">
              Adventure
            </Badge>
            <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
            <p className="text-sm text-white/80">{description}</p>
          </div>
        </div>
        <CardHeader className="pt-6">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/api/placeholder/80/80" alt={author} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{author}</p>
                <p className="text-xs text-muted-foreground flex items-center">
                  <CalendarDays className="mr-1 h-3 w-3" />
                  {date}
                </p>
              </div>
            </div>
            <Badge variant="outline" className="text-xs">
              {readTime}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">
            Embark on a breathtaking journey through untamed wilderness, where every step reveals nature's hidden wonders and challenges the adventurous spirit. Discover cascading waterfalls, encounter diverse wildlife, and witness awe-inspiring vistas that will leave you speechless.
          </p>
          {read && <p className="text-sm text-muted-foreground line-clamp-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quidem soluta consectetur veritatis quibusdam aperiam sequi facere commodi accusantium atque.</p>}
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
              <Share2 className="h-4 w-4" />
            </Button>
          </div>
          {!read ?
          <Button variant="outline" size="sm" className="gap-2" onClick={handleRead}>
            Read More <ArrowRight className="h-4 w-4" />
          </Button>
          :
          <Button variant="ghost" onClick={handleRead}>
            <ArrowUp className="h-4 w-4" />
          </Button>
        }
        </CardFooter>
      </Card>
    </div>
  )
}

export default StaticCard;
