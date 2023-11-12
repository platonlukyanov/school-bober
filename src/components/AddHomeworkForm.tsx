"use client"
import * as z from "zod"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toCapitalized from "~/utils/toCapitalized"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { format } from 'date-fns';
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "~/utils/shadcn-utils";
import { CalendarIcon, FileWarningIcon, LoaderIcon } from "lucide-react";
import { Calendar } from "./ui/calendar";
import { homeworkSchema } from "~/validation/homework";
import { DetailedHTMLProps, FormEvent, FormHTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ru } from "date-fns/locale";
import { useMutation } from '@tanstack/react-query'
import superjson from 'superjson';
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import toast from "react-hot-toast";
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { sendJson } from "~/utils/fetchJson";
import { Subject } from "~/db/types";
import { useUploadThing } from "~/hooks";
import { Input } from "./ui/input";

type AddHomeworkFormProps = DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
    subjects: Subject[]
}

type NewHomework = z.infer<typeof homeworkSchema>

function AddHomeworkForm({ className, onSubmit: onFormSubmit, subjects, ...rest }: AddHomeworkFormProps) {
    const [animationParent] = useAutoAnimate()
    const { mutate: addHomework, isPending, isSuccess, isError, error } = useMutation({
        mutationFn: (body: NewHomework) => sendJson('/api/homeworks', {
            method: 'POST',
            body: superjson.stringify(body),
        }),
        mutationKey: ['homeworks']
    })
    const { isUploading, startUpload } = useUploadThing('imageUploader', {});
    const form = useForm<NewHomework>({
        resolver: zodResolver(homeworkSchema),
        mode: "all",
    })
    const [imageFile, setImageFile] = useState<File | null>(null)

    const onSubmit = async (data: NewHomework) => {
        let uploadResult;
        if (imageFile) {
            uploadResult = await startUpload([imageFile]);
        }
        addHomework({...data, imageUrl: uploadResult?.[0]?.url }, {
            onSuccess: () => {
                form.setValue('content', '')
                form.setValue('subject', '')
                form.resetField('lessonDate')
                toast('Домашнее задание успешно добавлено', {
                    icon: '🎉',
                })
            }
        })
    }

    const isLoading = isPending || isUploading

    return (
        <section ref={animationParent}>
            {error ? <Alert variant="destructive" className="mb-6 w-full">
                <FileWarningIcon className="h-4 w-4" />
                <AlertTitle>Ошибка</AlertTitle>
                <AlertDescription>
                    Произошла некая ошибка. Больше ничего не скажу :)
                </AlertDescription>
            </Alert> : <Alert className="mb-6 w-full">
                <AlertDescription>Вы можете добавить домашнее задание как текст или как фото. Но помните, считывать ДЗ легче через текст</AlertDescription>
            </Alert>}
            
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className={twMerge('space-y-8', className)} {...rest}>
                    <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                            <Select value={field.value} onValueChange={field.onChange}>
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Выберите предмет..." />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent >
                                    {subjects.map(({ code, title }, index) => (
                                        code && <SelectItem key={index} value={code}>
                                            {toCapitalized(title ?? code)}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                                <FormMessage />
                            </Select>
                        )} />
                    <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Что задали?</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Напишите, что задали..."
                                        className="resize-none"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />
                    <div className="flex w-full justify-center text-slate-600 opacity-50 uppercase font-bold text-lg -my-2">
                        ИЛИ
                    </div>
                    <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Загрузи фото</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        onChange={e => setImageFile(e.currentTarget.files?.[0] ?? null)}
                                        className="w-full"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="lessonDate"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Когда задали?</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[240px] pl-3 text-left font-normal",
                                                    !field.value && "text-muted-foreground"
                                                )}
                                            >
                                                {field.value ? (
                                                    format(field.value, "PPP", {
                                                        locale: ru,
                                                    })
                                                ) : (
                                                    <span>Выбери дату</span>
                                                )}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={field.value}
                                            onSelect={field.onChange}
                                            initialFocus
                                            locale={ru}
                                        />
                                    </PopoverContent>
                                </Popover>
                                <FormDescription>
                                Какого числа было задано домашнее задание
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">
                        {isLoading && <LoaderIcon className="mr-2 h-4 w-4 animate-spin" />}
                        Добавить
                    </Button>
                </form>
            </Form>
        </section>
    )
}

export default AddHomeworkForm