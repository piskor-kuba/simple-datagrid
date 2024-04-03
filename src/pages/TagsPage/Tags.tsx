import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useTagsPage } from './hooks/ui/useTagsPage';
import { columns } from './ColumnsTags';
import { Error, Spinner, Input, Select } from '../../components/atoms';
import { FormProvider, useForm } from 'react-hook-form';
import { useEffect } from 'react';

type TTagsForm = {
	pageSize: number;
	order: 'asc' | 'desc';
	sortField: 'popular' | 'name' | 'activity';
};

export const TagsPage = () => {
	const {
		tagsData,
		tagsError,
		tagsIsLoading,
		paginationModel,
		sortModel,
		setPaginationModel,
		setSortModel,
	} = useTagsPage();
	const methods = useForm<TTagsForm>({
		values: {
			pageSize: paginationModel.pageSize,
			order: 'asc',
			sortField: 'popular',
		},
	});
	const pageSize = methods.watch('pageSize');
	const order = methods.watch('order');
	const sortField = methods.watch('sortField');

	useEffect(() => {
		if (Number(pageSize) >= 0 && Number(pageSize) <= 99) {
			setPaginationModel((prev) => ({
				...prev,
				pageSize: Number(pageSize),
			}));
		} else {
			methods.setError('pageSize', {
				type: 'manual',
				message: 'Page size must be between 0 and 99',
			});
		}
	}, [methods, pageSize, setPaginationModel]);

	useEffect(() => {
		if (order) {
			setSortModel([
				{
					field: sortField,
					sort: order,
				},
			]);
		}
	}, [sortField, order, setSortModel]);

	if (tagsError) {
		return <Error {...tagsError} />;
	}

	if (tagsData) {
		return (
			<FormProvider {...methods}>
				<div style={{ width: '100vw', minHeight: '100vh' }}>
					<div style={{ display: 'flex', width: '25%', gap: 20 }}>
						<Input
							testId='input-pageSize'
							name='pageSize'
							type='number'
							variant='outlined'
							label='Page size'
						/>
						<Select
							name='sortField'
							label='Sort'
							options={['popular', 'name', 'activity']}
						/>
						<Select name='order' label='Order' options={['asc', 'desc']} />
					</div>
					<DataGrid
						autoHeight
						columns={columns as GridColDef[]}
						paginationMode='server'
						sortingMode='server'
						rows={tagsData.items}
						rowCount={tagsData.quota_remaining}
						getRowId={(row) => row.name}
						paginationModel={paginationModel}
						sortModel={sortModel}
						onPaginationModelChange={setPaginationModel}
						onSortModelChange={setSortModel}
						loading={tagsIsLoading}
						disableColumnSorting
						disableColumnMenu
						disableColumnResize
					/>
				</div>
			</FormProvider>
		);
	}

	return <Spinner />;
};
