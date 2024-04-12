
"use server"
import { auth } from "@/services/auth";
import { Prisma } from "@/services/database";
import { upsertTodoSchema,  DeleteTodoSchema} from "./schema";
import { z } from "zod";

export async function getUserTodos(){
    const session = await auth();
const todos = await Prisma.todo.findMany({
    where: {
        userId: session?.user?.id,
    },
    orderBy: {
        createAt: 'desc'
    }
})
    return todos
}


export async function upsertTodo(input: z.infer<typeof upsertTodoSchema>){
    const session = await auth();
if( !session?.user?.id){
    return {
        error: "Not authorized",
        data: null,
    }
}

    if(input.id){
        const todo = await Prisma.todo.findUnique({
            where: {
                id: input.id,
                userId: session?.user?.id
            },
            select: {
                id:true,
            }
        })

        if(!todo){
            return {
                error: "Not found",
                data: null,
            }
        }

        const updateTodo = await Prisma.todo.update({
            where: {
                id: input.id,
                userId: session?.user?.id
            },
            data: {
                title: input.title,
                doneAt: input.doneAt,
            },
        })
        return {
            error: null,
            data: updateTodo
        }
    }

    
    if(!input.title){
        return {
            error: 'Title is required',
            data: null 
        }
    }

    const todo = await Prisma.todo.create({
        data:{
            title: input.title,
            userId: session?.user?.id
        }
    })

        return todo
}

export async function deleteTodo(input: z.infer<typeof DeleteTodoSchema>){
    const session = await auth();

    if( !session?.user?.id){
        return {
            error: "Not authorized",
            data: null,
        }
    }

    const todo = await Prisma.todo.findUnique({
        where: {
            id: input.id,
            userId: session?.user?.id
        },
        select: {
            id:true,
        }

    })

    if(!todo){
        return {
            error: "Not found",
            data: null,
        }
    }
    await Prisma.todo.delete({
        where: {
            id: input.id,
            userId: session?.user?.id
        },
        
    })
    return {
        error: 'Todo deleted succesfully',
        data: null 
    }

}

    
