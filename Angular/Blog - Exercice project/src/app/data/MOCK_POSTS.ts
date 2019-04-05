import { Post } from "../models/post";

export const Posts: Post[] = [
    {title: 'Create a new angular project', content: 'To create a new angular project, launch the following command: ng new MyProjectName', loveIts: 0, created_at: new Date()},
    {title: 'Create a new component', content: 'To create a new angular component, launch the following command: ng generate component MyComponentName', loveIts: 0, created_at: new Date()},
    {title: 'Create a service', content: 'To create a new service, launch the following command: ng generate service MyServiceName', loveIts: 0, created_at: new Date()}
];