import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { AdminDashboardTabsList } from '@/Layouts/Backend/Partials/dashboard';
import { Sidebar } from '@/Layouts/Backend/Partials/Sidebar';

export default function Edit({ mustVerifyEmail, status }) {
    return (
        <div>
            <Sidebar lists={AdminDashboardTabsList} />
        <div className='md:ml-[272px]'>

            <AuthenticatedLayout
               
            >
                <Head title="Profile" />

                <div className="py-8">
                    <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                            <UpdateProfileInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                                className="max-w-xl"
                            />
                        </div>

                        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                            <UpdatePasswordForm className="max-w-xl" />
                        </div>

                        <div className="bg-white p-4 shadow sm:rounded-lg sm:p-8">
                            <DeleteUserForm className="max-w-xl" />
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>

        </div>

    );
}
