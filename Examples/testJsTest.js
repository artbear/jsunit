(function() { 

	return {

		setUp: function() {
			// �����-�� �������������...
			inform('Starting...');
		},

		tearDown: function() {
			// ������� �� ����� �����...
			inform('Finishing...')
		},

		testGreenTest: function () {
			assert("�������� ������ ���� �������", true);
		},

		testRedTest: function () {
			assert("�������� ������ ���� �������", false);
		}
	};

})();