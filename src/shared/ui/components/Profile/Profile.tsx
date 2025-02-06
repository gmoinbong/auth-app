import { FC } from 'react'

type Props = {
    username?: string;
    id?: string;
}

export const Profile: FC<Props> = ({ username, id }) => {
    return (
        <div className="min-w-40 bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-md transition-all hover:shadow-lg p-6">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6 border-b pb-3">
                    Profile Information
                </h1>
                
                <div className="space-y-4">
                    <div className="flex flex-col space-y-2">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            User ID
                        </span>
                        <p className="text-gray-700 dark:text-gray-300 font-mono bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md">
                            {id || 'Not available'}
                        </p>
                    </div>

                    <div className="flex flex-col space-y-2">
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                            Username
                        </span>
                        <p className="text-gray-700 dark:text-gray-300 font-semibold bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded-md">
                            {username || 'Not provided'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}